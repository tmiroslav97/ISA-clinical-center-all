package clinic.centersystem.service.intf;

import clinic.centersystem.model.RoomCalendar;
import org.joda.time.LocalDate;

import java.util.List;

public interface RoomCalendarService {
    RoomCalendar findById(Long id);

    List<Integer> findByRoomAndDate(Long roomId, LocalDate dt);
}
