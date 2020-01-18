package clinic.centersystem.controller;

import clinic.centersystem.model.Room;
import clinic.centersystem.service.RoomServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/room")
public class RoomController {

    private final RoomServiceImpl roomService;

    public RoomController(RoomServiceImpl roomService) {
        this.roomService = roomService;
    }

    @RequestMapping(method = GET, value = "/all/{clinicId}")
    public ResponseEntity<List<Room>> getClinicRooms(@PathParam("clinicId") Long clinicId) {
        return new ResponseEntity<>(roomService.findByClinic(clinicId), HttpStatus.OK);
    }
}
