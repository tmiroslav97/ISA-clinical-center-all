package clinic.centersystem.service;

import clinic.centersystem.converter.ClinicCenterAdminConverter;
import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.model.ClinicCenter;
import clinic.centersystem.model.ClinicCenterAdmin;
import clinic.centersystem.security.TokenUtils;
import clinic.centersystem.service.intf.ClinicCenterAdminService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClinicCenterAdministratorService {

    @Autowired
    private ClinicCenterAdminService clinicCenterAdminService;

    private static final Logger logger = LoggerFactory.getLogger(ClinicCenterAdministratorService.class);

    public ClinicCenterAdminResponse clinicCenterAdmin(Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.clinicCenterAdminService.findById(id);
        return ClinicCenterAdminConverter.toCreateClinicCenterAdmin(clinicCenterAdmin);
    }

}
