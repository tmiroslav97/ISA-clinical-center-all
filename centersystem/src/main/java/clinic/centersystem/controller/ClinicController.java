package clinic.centersystem.controller;

import clinic.centersystem.dto.request.ClinicRequestDTO;
import clinic.centersystem.dto.response.ClinicResponse;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.service.ClinicServiceImpl;
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
@RequestMapping(value = "/clinic", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClinicController {

    private final ClinicServiceImpl clinicService;

    public ClinicController(ClinicServiceImpl clinicService) {
        this.clinicService = clinicService;
    }

    @RequestMapping(method = POST, value = "/reg-clinic")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<String> registerClinic(@RequestBody ClinicRequestDTO ccaRegReqDTO) {
        boolean flag = this.clinicService.registerClinic(ccaRegReqDTO);
        if (flag) {
            return new ResponseEntity<>("Clinic successfuly added", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Clinic with this name already exists", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = GET, value = "/clinics")
    public ResponseEntity<List<ClinicResponse>> getClinics() {
        return new ResponseEntity<List<ClinicResponse>>(this.clinicService.getClinics(), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/search-clinics")
    public ResponseEntity<List<Clinic>> searchClinics(@PathVariable String name) {
        return new ResponseEntity<List<Clinic>>(this.clinicService.searchClinics(name), HttpStatus.OK);
    }
}
