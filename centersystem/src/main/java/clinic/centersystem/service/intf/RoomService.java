package clinic.centersystem.service.intf;


import clinic.centersystem.dto.request.RoomSearchDTO;
import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.model.Room;

import java.util.List;

public interface RoomService {

    Room findById(Long id);

    RoomResponseDTO findByClinic(Long id, Integer pageCnt);

    List<Room> findAll();

    Room save(Room room);

    List<Room> searchRooms(RoomSearchDTO roomSearchDTO);
}
