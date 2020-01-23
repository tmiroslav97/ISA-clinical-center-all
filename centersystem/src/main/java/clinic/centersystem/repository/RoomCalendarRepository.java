package clinic.centersystem.repository;

import clinic.centersystem.model.RoomCalendar;
import org.joda.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomCalendarRepository extends JpaRepository<RoomCalendar, Long> {

    @Query("select rc.termin from RoomCalendar rc where rc.room=(?1) and rc.date=(?2)")
    List<Integer> findByRoomAndDate(Long roomId, LocalDate dt);
}
