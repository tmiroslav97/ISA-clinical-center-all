package clinic.centersystem.controller;

import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.service.ClinicAdministratorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/adm-cli", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClinicAdminController {
    private final ClinicAdministratorService clinicAdministratorService;

    public ClinicAdminController(ClinicAdministratorService clinicAdministratorService) {
        this.clinicAdministratorService = clinicAdministratorService;
    }

    @RequestMapping(method = POST, Value="/add-doctor")
    public ResponseEntity<String>addDoctor(@RequestBody DoctorRequestDTO doctorRequestDTO){
        return new ResponseEntity<>(this.clinicAdministratorService.addDoctor(doctorRequestDTO), HttpStatus.OK);
    }
    
}
