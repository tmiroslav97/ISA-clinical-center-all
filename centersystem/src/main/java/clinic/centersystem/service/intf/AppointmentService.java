package clinic.centersystem.service.intf;

import clinic.centersystem.dto.response.AppointmentResponseDTO;
import clinic.centersystem.model.Appointment;

public interface AppointmentService {

    Appointment findById(Long id);

    Appointment save(Appointment appointment);

    AppointmentResponseDTO getById(Long id);
}
