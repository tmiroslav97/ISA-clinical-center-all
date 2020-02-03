package clinic.centersystem.service.intf;

import clinic.centersystem.model.Appointment;

public interface AppointmentService {

    Appointment findById(Long id);
}
