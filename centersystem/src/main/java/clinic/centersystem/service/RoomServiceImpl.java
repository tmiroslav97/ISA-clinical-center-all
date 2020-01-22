package clinic.centersystem.service;

import clinic.centersystem.dto.request.RoomSearchDTO;
import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.model.Room;
import clinic.centersystem.repository.RoomRepository;
import clinic.centersystem.service.intf.RoomService;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room findById(Long id) {
        return roomRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public RoomResponseDTO findByClinic(Long id, Integer pageCnt) {
        Pageable pageable = PageRequest.of(pageCnt, 10);
        Page<Room> rooms = roomRepository.findByClinicId(id, pageable);
        RoomResponseDTO roomResponseDTO = new RoomResponseDTO();
        roomResponseDTO.setRooms(rooms.getContent());
        roomResponseDTO.setPageCount(rooms.getTotalPages());

        return roomResponseDTO;
    }

    @Override
    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    @Override
    public Room save(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public RoomResponseDTO searchRooms(RoomSearchDTO roomSearchDTO) {
        Pageable pageable = PageRequest.of(roomSearchDTO.getPageCnt(), 10);
        LocalDate dt = new LocalDate(roomSearchDTO.getDate());
        System.out.println(dt);
        Page<Room> rooms = roomRepository.searchRooms(roomSearchDTO.getName(), roomSearchDTO.getClinicId(),dt, pageable);
        RoomResponseDTO roomResponseDTO = new RoomResponseDTO();
        roomResponseDTO.setRooms(rooms.getContent());
        roomResponseDTO.setPageCount(rooms.getTotalPages());

        return roomResponseDTO;
    }
}
