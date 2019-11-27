package clinic.centersystem.converter;

import clinic.centersystem.dto.request.ClinicAdminReqDTO;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.model.ClinicAdmin;
import clinic.centersystem.model.enumeration.RoleEnum;

public class ClinicAdminConverter {

    public static ClinicAdmin toCreateClinicAdminFromRequest(ClinicAdminReqDTO clinicAdminReqDTO) {
        return ClinicAdmin.clinicAdminBuilder()
                .email(clinicAdminReqDTO.getEmail())
                .firstName(clinicAdminReqDTO.getFirstName())
                .lastName(clinicAdminReqDTO.getLastName())
                .isFirstLog(true)
                .role(RoleEnum.ROLE_ADMINC)
                .enabled(true)
                .password(clinicAdminReqDTO.getPassword())
                .predefined(false)
                .build();
    }

}
