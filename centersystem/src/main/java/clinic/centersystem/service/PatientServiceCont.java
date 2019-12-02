package clinic.centersystem.service;


import clinic.centersystem.converter.PatientConverter;
import clinic.centersystem.dto.response.PatientResponse;
import clinic.centersystem.model.Patient;
import clinic.centersystem.service.intf.PatientService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
public class PatientServiceCont {

    @Autowired
    private PatientService patientService;

    public List<PatientResponse> getPatients() {
        List<Patient> patients = this.patientService.findAll();
        List<PatientResponse> patientResponses = new ArrayList<PatientResponse>();
        for (Patient patient : patients) {
            patientResponses.add(PatientConverter.toCreatePatientResponseFromPatient(patient));
        }
        
        return patientResponses;
    }

}
