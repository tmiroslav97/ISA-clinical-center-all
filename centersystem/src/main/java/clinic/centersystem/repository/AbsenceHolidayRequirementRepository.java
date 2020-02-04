package clinic.centersystem.repository;

import clinic.centersystem.model.AbsenceHolidayRequirement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AbsenceHolidayRequirementRepository extends JpaRepository<AbsenceHolidayRequirement, Long> {

    List<AbsenceHolidayRequirement> findAllByPersonnelId(Long id);
}
