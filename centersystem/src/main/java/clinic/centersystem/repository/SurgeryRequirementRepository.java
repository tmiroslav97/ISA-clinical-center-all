package clinic.centersystem.repository;

import clinic.centersystem.model.SurgeryRequirement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurgeryRequirementRepository extends JpaRepository<SurgeryRequirement, Long> {
}
