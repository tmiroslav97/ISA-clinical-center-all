package clinic.centersystem.converter;

import clinic.centersystem.dto.request.AppointmentTypeRequestDTO;
import clinic.centersystem.dto.response.AppointmentTypeResponse;
import clinic.centersystem.model.AppointmentType;

public class AppointmentTypeConverter {
    public static AppointmentType toCreateAppointmentTypeFromRequest(AppointmentTypeRequestDTO appointmentTypeRequestDTO){
        return AppointmentType.appointmentTypeBuilder()
                .type(appointmentTypeRequestDTO.getType())
                .build();
    }
    public static AppointmentTypeResponse toCreateAppointmentTypeFromAppointmentType(AppointmentType appointmentType){
        return AppointmentTypeResponse.builder()
                .type(appointmentType.getType())
                .build();
    }


}
