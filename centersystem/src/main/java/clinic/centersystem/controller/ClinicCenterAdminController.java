package clinic.centersystem.controller;


import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.dto.response.RegistrationRequirementResponse;
import clinic.centersystem.model.ClinicCenterAdmin;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.service.ClinicCenterAdministratorService;
import clinic.centersystem.service.intf.RegistrationRequirementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/cca", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClinicCenterAdminController {


    private final ClinicCenterAdministratorService clinicCenterAdministratorService;

    public ClinicCenterAdminController(ClinicCenterAdministratorService clinicCenterAdministratorService) {
        this.clinicCenterAdministratorService = clinicCenterAdministratorService;
    }

    @RequestMapping(method = GET, value = "/{ccaId}")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<ClinicCenterAdminResponse> clinicCenterAdmin(@PathVariable Long ccaId) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.clinicCenterAdmin(ccaId), HttpStatus.CREATED);
    }

    @RequestMapping(method = GET, value = "/regreqs")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<List<RegistrationRequirementResponse>> registrationReqs() {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.registrationRequirementList(), HttpStatus.OK);
    }
}
