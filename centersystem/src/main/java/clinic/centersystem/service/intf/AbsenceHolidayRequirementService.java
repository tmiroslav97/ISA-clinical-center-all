package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.AbsenceRequirementDTO;
import clinic.centersystem.model.AbsenceHolidayRequirement;

import java.util.List;

public interface AbsenceHolidayRequirementService {
    AbsenceHolidayRequirement findById(Long id);

    List<AbsenceHolidayRequirement> findAll();

    List<AbsenceHolidayRequirement> findAllByPersonnelId(Long id);

    AbsenceHolidayRequirement save(AbsenceHolidayRequirement absenceHolidayRequirement);

    String submitAbsenceRequirement(AbsenceRequirementDTO absenceRequirementDTO);
}
