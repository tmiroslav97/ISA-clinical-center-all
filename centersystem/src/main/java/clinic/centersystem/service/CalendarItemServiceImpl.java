package clinic.centersystem.service;


import clinic.centersystem.model.CalendarItem;
import clinic.centersystem.repository.CalendarItemRepository;
import clinic.centersystem.service.intf.CalendarItemService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalendarItemServiceImpl implements CalendarItemService {

    @Autowired
    private CalendarItemRepository calendarItemRepository;

    @Override
    public CalendarItem findById(Long id) {
        return this.calendarItemRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<CalendarItem> findAll() {
        return this.calendarItemRepository.findAll();
    }

    @Override
    public CalendarItem save(CalendarItem calendarItem) {
        return this.calendarItemRepository.save(calendarItem);
    }

    @Override
    public Integer findByCalendarIdandDate(Long calId, DateTime dtStart, DateTime dtEnd) {
        return calendarItemRepository.findByCalendarIdandDate(calId, dtStart, dtEnd);
    }
}
