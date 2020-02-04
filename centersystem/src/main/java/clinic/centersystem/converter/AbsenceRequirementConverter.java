package clinic.centersystem.converter;

import clinic.centersystem.dto.request.AbsenceRequirementDTO;
import clinic.centersystem.dto.response.AbsenceRequirementResponse;
import clinic.centersystem.model.AbsenceHolidayRequirement;

public class AbsenceRequirementConverter {

    public static AbsenceHolidayRequirement toCreateAbsenceRequirementFromAbsenceRequest(AbsenceRequirementDTO absenceRequirementDTO) {
        return AbsenceHolidayRequirement.builder()
                .type(absenceRequirementDTO.getType())
                .startDate(absenceRequirementDTO.getStartDate())
                .endDate(absenceRequirementDTO.getEndDate())
                .status("REQUESTED")
                .build();
    }

    public static AbsenceRequirementResponse toCreateAbsenceRequirementResponseFromAbsenceRequirement(AbsenceHolidayRequirement absenceHolidayRequirement) {
        return AbsenceRequirementResponse.builder()
                .type(absenceHolidayRequirement.getType())
                .status(absenceHolidayRequirement.getStatus())
                .startDate(absenceHolidayRequirement.getStartDate())
                .endDate(absenceHolidayRequirement.getEndDate())
                .build();
    }
}
