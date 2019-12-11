package clinic.centersystem.controller;

import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Doctor;
import clinic.centersystem.service.ClinicAdministratorService;
import clinic.centersystem.service.DoctorServiceCont;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/adm-cli", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClinicAdminController {
    private final ClinicAdministratorService clinicAdministratorService;
    private final DoctorServiceCont doctorServiceCont;

    public ClinicAdminController(ClinicAdministratorService clinicAdministratorService, DoctorServiceCont doctorServiceCont) {
        this.clinicAdministratorService = clinicAdministratorService;
        this.doctorServiceCont = doctorServiceCont;
    }

    @RequestMapping(method = POST, value="/add-doctor")
    public ResponseEntity<String>addDoctor(@RequestBody DoctorRequestDTO doctorRequestDTO){
        return new ResponseEntity<>(this.clinicAdministratorService.addDoctor(doctorRequestDTO), HttpStatus.OK);
    }
    @RequestMapping(method = GET, value = "/fetch")
    @PreAuthorize("hasRole('ADMINC')")
    public ResponseEntity<List<DoctorResponse>> getDoctors() {
        return new ResponseEntity<List<DoctorResponse>>(this.clinicAdministratorService.getDoctors(), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/searchDoctors")
    @PreAuthorize("hasRole('ADMINC')")
    public ResponseEntity<List<Doctor>> searchDoctorByName(@PathVariable String name) {
        return new ResponseEntity<List<Doctor>>(this.doctorServiceCont.searchDoctorByName(name), HttpStatus.OK);
    }
}
