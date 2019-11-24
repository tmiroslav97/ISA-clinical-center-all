package clinic.centersystem.service;

import clinic.centersystem.converter.ClinicCenterAdminConverter;
import clinic.centersystem.converter.RegistrationRequirementConverter;
import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.dto.response.RegistrationRequirementResponse;
import clinic.centersystem.model.ClinicCenter;
import clinic.centersystem.model.ClinicCenterAdmin;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.security.TokenUtils;
import clinic.centersystem.service.intf.ClinicCenterAdminService;
import clinic.centersystem.service.intf.RegistrationRequirementService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClinicCenterAdministratorService {

    @Autowired
    private ClinicCenterAdminService clinicCenterAdminService;

    @Autowired
    private RegistrationRequirementService registrationRequirementService;


    private static final Logger logger = LoggerFactory.getLogger(ClinicCenterAdministratorService.class);

    public ClinicCenterAdminResponse clinicCenterAdmin(Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.clinicCenterAdminService.findById(id);
        return ClinicCenterAdminConverter.toCreateClinicCenterAdmin(clinicCenterAdmin);
    }

    public List<RegistrationRequirementResponse> registrationRequirementList() {
        List<RegistrationRequirement> reqs = registrationRequirementService.findAll();
        List<RegistrationRequirementResponse> registrationRequirementResponses = new ArrayList<>();
        for (RegistrationRequirement req: reqs) {
            registrationRequirementResponses.add(RegistrationRequirementConverter.toCreateRegistrationRequirementResponse(req));
        }
        return registrationRequirementResponses;
    }

}
