package clinic.centersystem.converter;

import clinic.centersystem.dto.response.CalendarItemResponse;
import clinic.centersystem.dto.response.CalendarResponse;
import clinic.centersystem.model.Calendar;
import clinic.centersystem.model.CalendarItem;

import java.util.HashSet;

public class CalendarConverter {

    public static CalendarResponse toCreateCalendarResponseFromCalendar(Calendar calendar) {
        return CalendarResponse.builder()
                .id(calendar.getId())
                .calendarItemResponseSet(new HashSet<CalendarItemResponse>())
                .build();
    }

    public static CalendarItemResponse toCreateCalendarItemResponseFromCalendarItem(CalendarItem calendarItem) {
        return CalendarItemResponse.builder()
                .id(calendarItem.getId())
                .start(calendarItem.getStart())
                .end(calendarItem.getEnd())
                .title(calendarItem.getTitle())
                .up_down_ind(calendarItem.getUp_down_ind())
                .build();
    }
}
