package clinic.centersystem.repository;

import clinic.centersystem.model.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {

    MedicalRecord findByPatientId(Long id);
}
