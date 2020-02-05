package clinic.centersystem.service;

import clinic.centersystem.dto.response.AppointmentResponseDTO;
import clinic.centersystem.exception.ResourceNotExistsException;
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
        return appointmentRepository.findById(id).orElseThrow(()-> new ResourceNotExistsException("Appointment doesn't exist"));
    }

    @Override
    public Appointment save(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public AppointmentResponseDTO getById(Long id) {
        Appointment appointment = this.findById(id);
        AppointmentResponseDTO appointmentResponseDTO = AppointmentResponseDTO.builder()
                .appState(appointment.getAppState().toString())
                .patient(appointment.getPatient().getFirstName() + " " + appointment.getPatient().getLastName())
                .build();

        return appointmentResponseDTO;
    }
}
