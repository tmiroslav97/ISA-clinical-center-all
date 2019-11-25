package clinic.centersystem.converter;

import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.model.ClinicCenterAdmin;

public class ClinicCenterAdminConverter {

    public static ClinicCenterAdminResponse toCreateClinicCenterAdmin(ClinicCenterAdmin clinicCenterAdmin) {
        return ClinicCenterAdminResponse.builder()
                .id(clinicCenterAdmin.getId())
                .email(clinicCenterAdmin.getEmail())
                .role(clinicCenterAdmin.getRole().name())
                .isNotFirstLogin(clinicCenterAdmin.isFirstLog())
                .predefined(clinicCenterAdmin.isPredefined())
                .build();
    }
}
