package clinic.centersystem.controller;

import clinic.centersystem.dto.request.AppointmentTypeRequestDTO;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.ClinicAdministratoreResponse;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.service.ClinicAdminServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping(value = "/adm-cli", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClinicAdminController {

    private final ClinicAdminServiceImpl clinicAdminService;


    public ClinicAdminController(ClinicAdminServiceImpl clinicAdminService) {
        this.clinicAdminService = clinicAdminService;
    }

    @RequestMapping(method = GET, value = "/{id}")
    @PreAuthorize("hasRole('ADMINC')")
    public ResponseEntity<ClinicAdministratoreResponse> clinicAdministrator(@PathVariable Long id) {
        return new ResponseEntity<>(this.clinicAdminService.clinicAdministrator(id), HttpStatus.CREATED);
    }



    /*@RequestMapping(method = GET, value = "/fetch")
    @PreAuthorize("hasRole('ADMINC')")
    public ResponseEntity<List<DoctorResponse>> getDoctors() {
        return new ResponseEntity<List<DoctorResponse>>(this.clinicAdministratorService.getDoctors(), HttpStatus.OK);
    }*/
    /*@RequestMapping(method = GET, value = "/fetchAppointmentType")
    @PreAuthorize("hasRole('ADMINC')")
    public ResponseEntity<List<AppointmentTypeResponse>> getAppointmentTypes() {
        return new ResponseEntity<List<AppointmentTypeResponse>>(this.clinicAdministratorService.getAppointmentTypes(), HttpStatus.OK);
    }*/


    /*@RequestMapping(method = GET, value = "/searchDoctors")
    @PreAuthorize("hasRole('ADMINC')")
    public ResponseEntity<List<Doctor>> searchDoctorByName(@PathVariable String name) {
        return new ResponseEntity<List<Doctor>>(this.doctorServiceCont.searchDoctorByName(name), HttpStatus.OK);
    }*/
}
