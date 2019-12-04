package clinic.centersystem.controller;

import clinic.centersystem.dto.response.PatientResponse;
import clinic.centersystem.service.PatientServiceCont;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/pat", produces = MediaType.APPLICATION_JSON_VALUE)
public class PatientController {

    private final PatientServiceCont patientServiceCont;

    public PatientController(PatientServiceCont patientServiceCont) {
        this.patientServiceCont = patientServiceCont;
    }

    @RequestMapping(method = GET, value = "/all")
    public ResponseEntity<List<PatientResponse>> getPatients() {
        return new ResponseEntity<>(this.patientServiceCont.getPatients(), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/all/{clinicId}")
    public ResponseEntity<Set<PatientResponse>> getPatientsByClinicId(@PathVariable Long clinicId) {
        return new ResponseEntity<>(this.patientServiceCont.getPatientsByClinicId(clinicId), HttpStatus.OK);
    }

}
