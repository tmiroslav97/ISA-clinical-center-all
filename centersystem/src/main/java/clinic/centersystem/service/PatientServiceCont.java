package clinic.centersystem.service;


import clinic.centersystem.converter.PatientConverter;
import clinic.centersystem.dto.response.PatientResponse;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.model.Patient;
import clinic.centersystem.service.intf.ClinicService;
import clinic.centersystem.service.intf.PatientService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@NoArgsConstructor
public class PatientServiceCont {

    @Autowired
    private PatientService patientService;

    @Autowired
    private ClinicService clinicService;

    public List<PatientResponse> getPatients() {
        List<Patient> patients = this.patientService.findAll();
        List<PatientResponse> patientResponses = new ArrayList<PatientResponse>();
        for (Patient patient : patients) {
            patientResponses.add(PatientConverter.toCreatePatientResponseFromPatient(patient));
        }

        return patientResponses;
    }

    public Set<PatientResponse> getPatientsByClinicId(Long clinicId) {
        Clinic clinic = this.clinicService.findById(clinicId);
        Set<Patient> patients = clinic.getPatients();
        Set<PatientResponse> patientResponses = new HashSet<PatientResponse>();
        for (Patient patient : patients) {
            patientResponses.add(PatientConverter.toCreatePatientResponseFromPatient(patient));
        }

        return patientResponses;
    }

}
