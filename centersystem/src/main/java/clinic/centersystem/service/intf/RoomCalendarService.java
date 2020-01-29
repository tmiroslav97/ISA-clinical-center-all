package clinic.centersystem.service.intf;

import clinic.centersystem.model.RoomCalendar;
import org.joda.time.DateTime;

import java.util.List;

public interface RoomCalendarService {
    RoomCalendar findById(Long id);

    List<Integer> findByRoomAndDate(Long roomId, DateTime dt);

    RoomCalendar save(RoomCalendar roomCalendar);
}
