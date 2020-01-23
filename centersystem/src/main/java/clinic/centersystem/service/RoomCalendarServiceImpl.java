package clinic.centersystem.service;

import clinic.centersystem.model.RoomCalendar;
import clinic.centersystem.repository.RoomCalendarRepository;
import clinic.centersystem.service.intf.RoomCalendarService;
import org.joda.time.LocalDate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomCalendarServiceImpl implements RoomCalendarService {

    private RoomCalendarRepository roomCalendarRepository;

    @Override
    public RoomCalendar findById(Long id) {
        return roomCalendarRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Integer> findByRoomAndDate(Long roomId, LocalDate dt) {
        return roomCalendarRepository.findByRoomAndDate(roomId, dt);
    }

}
