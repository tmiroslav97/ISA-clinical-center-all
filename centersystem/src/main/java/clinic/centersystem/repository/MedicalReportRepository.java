package clinic.centersystem.repository;

import clinic.centersystem.model.MedicalReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MedicalReportRepository extends JpaRepository<MedicalReport, Long> {

    @Query("select count(pre) from MedicalReport mp, Prescription pre where mp.id=(?1) and pre=mp.prescriptions and pre.isValidate=FALSE")
    Integer count(Long id);
}
