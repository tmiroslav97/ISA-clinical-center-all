package clinic.centersystem.service.intf;


import clinic.centersystem.dto.request.RoomSearchDTO;
import clinic.centersystem.model.Room;

import java.util.List;

public interface RoomService {

    Room findById(Long id);

    List<Room> findByClinic(Long id);

    List<Room> findAll();

    Room save(Room room);

    List<Room> searchRooms(RoomSearchDTO roomSearchDTO);
}
