package clinic.centersystem.repository;

import clinic.centersystem.model.MedicalReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalReportRepository extends JpaRepository<MedicalReport, Long> {
}
