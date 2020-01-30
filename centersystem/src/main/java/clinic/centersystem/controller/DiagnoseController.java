package clinic.centersystem.controller;

import clinic.centersystem.model.Diagnose;
import clinic.centersystem.model.Medicine;
import clinic.centersystem.service.DiagnoseServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/diagnose", produces = MediaType.APPLICATION_JSON_VALUE)
public class DiagnoseController {

    private final DiagnoseServiceImpl diagnoseService;

    public DiagnoseController(DiagnoseServiceImpl diagnoseService) {
        this.diagnoseService = diagnoseService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Diagnose>> getDiagnoses() {
        return new ResponseEntity<>(this.diagnoseService.findAll(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('CCADMIN')")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<String> addDiagnose(@RequestBody Diagnose diagnose) {
        this.diagnoseService.save(diagnose);
        return new ResponseEntity<>("Diagnose successfuly added", HttpStatus.OK);
    }
}
