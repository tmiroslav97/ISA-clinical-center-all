package clinic.centersystem.service;

import clinic.centersystem.converter.PatientConverter;
import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.Patient;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.repository.PatientRepository;
import clinic.centersystem.service.intf.AuthorityService;
import clinic.centersystem.service.intf.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private AuthorityService authorityService;

    @Override
    public Patient findById(Long id) {
        Patient patient = patientRepository.findById(id).orElse(null);
        return patient;
    }

    @Override
    public List<Patient> findAll() {
        return null;
    }

    @Override
    public Patient save(RegistrationRequirementDTO registrationRequirementDTO) {
        Patient patient = PatientConverter.toCreatePatientFromRequest(registrationRequirementDTO);

        patient = this.patientRepository.save(patient);

        return patient;
    }
}