package clinic.centersystem.repository;

import clinic.centersystem.model.CalendarItem;
import org.joda.time.DateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CalendarItemRepository extends JpaRepository<CalendarItem, Long> {

    @Query("select ci from CalendarItem  ci  where ci.calendar.id=(?1) and ci.start>=(?2)")
    List<CalendarItem> findByCalendarIdandDate(Long calId, DateTime dt);
}
