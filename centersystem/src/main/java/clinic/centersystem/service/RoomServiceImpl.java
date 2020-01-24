package clinic.centersystem.service;

import clinic.centersystem.dto.request.RoomSearchDTO;
import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.dto.response.RoomResponseTerminDTO;
import clinic.centersystem.dto.response.RoomResponseTerminPageDTO;
import clinic.centersystem.model.Room;
import clinic.centersystem.repository.RoomRepository;
import clinic.centersystem.service.intf.RoomCalendarService;
import clinic.centersystem.service.intf.RoomService;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomCalendarService roomCalendarService;

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
    public RoomResponseTerminPageDTO searchRooms(RoomSearchDTO roomSearchDTO) {
        Pageable pageable = PageRequest.of(roomSearchDTO.getPageCnt(), 10);
        DateTime dt = new DateTime(roomSearchDTO.getDate(), DateTimeZone.UTC);
        DateTimeFormatter dtf = DateTimeFormat.forPattern("yyyy-MM-dd");
        System.out.println(dt.toString());
        Page<Room> rooms = roomRepository.searchRooms(roomSearchDTO.getName(), roomSearchDTO.getClinicId(), pageable);
        RoomResponseTerminPageDTO roomResponseTerminPageDTO = new RoomResponseTerminPageDTO();
        List<RoomResponseTerminDTO> roomResponseTerminDTO = new ArrayList<>();
        roomResponseTerminPageDTO.setRooms(roomResponseTerminDTO);
        roomResponseTerminPageDTO.setPageCount(rooms.getTotalPages());

        for (Room room : rooms.getContent()) {
            RoomResponseTerminDTO rrtDTO = new RoomResponseTerminDTO();
            rrtDTO.setRoom(room);
            rrtDTO.setTermins(roomCalendarService.findByRoomAndDate(room.getId(), dt));
            System.out.println(dt.toString());
            roomResponseTerminDTO.add(rrtDTO);
            if (rrtDTO.getTermins().size() == 4) {
                boolean flag = true;
                while (flag) {
                    dt = dt.plusDays(1);
                    List<Integer> termins = roomCalendarService.findByRoomAndDate(room.getId(), dt);
                    for (int i = 7; i <= 16; i += 3) {
                        if (!termins.contains(i)) {
                            rrtDTO.setFirstFreeTermin(dtf.print(dt) + " " + String.valueOf(i) + "-" + String.valueOf(i + 3));
                            flag = false;
                            break;
                        }
                    }
                }
            } else {
                for (int i = 7; i <= 16; i += 3) {
                    if (!rrtDTO.getTermins().contains(i)) {
                        rrtDTO.setFirstFreeTermin(dtf.print(dt) + " " + String.valueOf(i) + "-" + String.valueOf(i + 3));
                        break;
                    }
                }
            }
        }

        return roomResponseTerminPageDTO;
    }
}
