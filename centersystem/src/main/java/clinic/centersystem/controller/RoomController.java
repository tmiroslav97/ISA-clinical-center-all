package clinic.centersystem.controller;

import clinic.centersystem.dto.request.RoomSearchDTO;
import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.model.Room;
import clinic.centersystem.service.RoomServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/room")
public class RoomController {

    private final RoomServiceImpl roomService;

    public RoomController(RoomServiceImpl roomService) {
        this.roomService = roomService;
    }

    @RequestMapping(method = GET, value = "/all/{clinicId}/{pageCnt}")
    public ResponseEntity<RoomResponseDTO> getClinicRooms(@PathVariable Long clinicId, @PathVariable Integer pageCnt) {
        return new ResponseEntity<>(roomService.findByClinic(clinicId, pageCnt), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value = "/search")
    public ResponseEntity<List<Room>> getClinicRooms(@RequestBody RoomSearchDTO roomSearchDTO) {
        return new ResponseEntity<>(roomService.searchRooms(roomSearchDTO), HttpStatus.OK);
    }
}
