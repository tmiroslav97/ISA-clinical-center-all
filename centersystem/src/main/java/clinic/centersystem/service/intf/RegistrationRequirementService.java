package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.RegistrationRequirement;

public interface RegistrationRequirementService {
    RegistrationRequirement save(RegistrationRequirementDTO registrationRequirement);
}
