package clinic.centersystem.service.intf;

import clinic.centersystem.model.SurgeryRequirement;

import java.util.List;

public interface SurgeryRequirementService {

    SurgeryRequirement findById(Long id);
    List<SurgeryRequirement> findAll();
}
