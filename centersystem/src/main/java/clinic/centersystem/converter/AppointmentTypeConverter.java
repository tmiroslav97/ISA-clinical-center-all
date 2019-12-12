package clinic.centersystem.converter;

import clinic.centersystem.dto.request.AppointmentTypeRequestDTO;
import clinic.centersystem.model.AppointmentType;

public class AppointmentTypeConverter {
    public static AppointmentType toCreateAppointmentTypeFromRequest(AppointmentTypeRequestDTO appointmentTypeRequestDTO){
        return AppointmentType.appointmentTypeBuilder()
                .type(appointmentTypeRequestDTO.getType())
                .build();
    }
}
