package clinic.centersystem.repository;

import clinic.centersystem.model.Appointment;
import clinic.centersystem.model.enumeration.AppStateEnum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findAllByDoctorIdAndAppState(Long id, AppStateEnum appStateEnum);
}
