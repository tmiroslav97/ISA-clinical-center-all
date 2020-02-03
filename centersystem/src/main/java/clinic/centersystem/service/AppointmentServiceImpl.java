package clinic.centersystem.service;

import clinic.centersystem.model.Appointment;
import clinic.centersystem.repository.AppointmentRepository;
import clinic.centersystem.service.intf.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public Appointment findById(Long id) {
        return appointmentRepository.findById(id).orElseGet(null);
    }
}
