package clinic.centersystem.service;

import clinic.centersystem.converter.ClinicConverter;
import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.converter.PatientConverter;
import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.dto.response.ClinicResponse;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.dto.response.PatientResponse;
import clinic.centersystem.model.*;
import clinic.centersystem.repository.AuthorityRepository;
import clinic.centersystem.repository.PatientRepository;
import clinic.centersystem.service.intf.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private AuthorityService authorityService;

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private MedicalRecordService medicalRecordService;

    @Override
    public Patient findById(Long id) {
        Patient patient = patientRepository.findById(id).orElse(null);
        return patient;
    }

    @Override
    public List<Patient> findAll() {
        return this.patientRepository.findAll();
    }

    @Override
    public Patient save(RegistrationRequirement registrationRequirement) {
        Patient patient = PatientConverter.toCreatePatientFromRequest(registrationRequirement);
        List<Authority> auths = this.authorityService.findByName("ROLE_PATIENT");
        patient.setAuthorities(auths);
        patient = patientRepository.save(patient);

        MedicalRecord medicalRecord = MedicalRecord.builder()
                .description("Zdravstevni karton pacijenta")
                .height(Float.valueOf(0))
                .weight(Float.valueOf(0))
                .bloodType("Nepoznato")
                .patient(patient)
                .build();

        medicalRecord = medicalRecordService.save(medicalRecord);
        patient.setMedicalRecord(medicalRecord);

        patientRepository.save(patient);
        return patient;
    }

    @Override
    public Patient save(Patient patient) {
        return patientRepository.save(patient);
    }

    public PatientResponse patient(Long id) {
        Patient patient = this.findById(id);
        return PatientConverter.toCreatePatientResponseFromPatient(patient);
    }

    @Override
    public List<PatientResponse> getPatients() {
        List<Patient> patients = this.findAll();
        List<PatientResponse> patientResponses = new ArrayList<PatientResponse>();
        for (Patient patient : patients) {
            patientResponses.add(PatientConverter.toCreatePatientResponseFromPatient(patient));
        }

        return patientResponses;
    }

    @Override
    public Set<PatientResponse> getPatientsByClinicId(Long clinicId) {
        Clinic clinic = clinicService.findById(clinicId);
        Set<Patient> patients = clinic.getPatients();
        Set<PatientResponse> patientResponses = new HashSet<PatientResponse>();
        for (Patient patient : patients) {
            patientResponses.add(PatientConverter.toCreatePatientResponseFromPatient(patient));
        }

        return patientResponses;
    }
}
