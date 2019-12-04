package clinic.centersystem.converter;

import clinic.centersystem.dto.request.AbsenceRequirementDTO;
import clinic.centersystem.model.AbsenceRequirement;

public class AbsenceRequirementConverter {

    public static AbsenceRequirement toCreateAbsenceRequirementFromAbsenceRequest(AbsenceRequirementDTO absenceRequirementDTO) {
        return AbsenceRequirement.builder()
                .type(absenceRequirementDTO.getType())
                .startDate(absenceRequirementDTO.getStartDate())
                .endDate(absenceRequirementDTO.getEndDate())
                .status("REQUESTED")
                .build();
    }
}
