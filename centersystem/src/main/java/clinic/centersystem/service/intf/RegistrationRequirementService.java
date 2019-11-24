package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.RegistrationRequirement;

import java.util.List;

public interface RegistrationRequirementService {

    List<RegistrationRequirement> findAll();

    RegistrationRequirement save(RegistrationRequirementDTO registrationRequirement);
}
