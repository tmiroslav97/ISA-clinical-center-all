package clinic.centersystem.repository;


import clinic.centersystem.model.Doctor;
import clinic.centersystem.model.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import javax.persistence.LockModeType;
import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findByClinicId(Long id);

    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)
    Doctor findOneById(Long id);

    List<Doctor> findByClinicIdAndLastNameIgnoringCase(Long clinicId, String lastName);
}
