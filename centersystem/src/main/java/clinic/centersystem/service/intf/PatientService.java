package clinic.centersystem.service.intf;


import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.Patient;

import java.util.List;

public interface PatientService {
    Patient findById(Long id);

    List<Patient> findAll();

    Patient save(RegistrationRequirementDTO registrationRequirementDTO);
}
