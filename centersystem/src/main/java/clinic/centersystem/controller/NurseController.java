package clinic.centersystem.controller;

import clinic.centersystem.dto.response.NurseResponse;
import clinic.centersystem.dto.response.PatientResponse;
import clinic.centersystem.service.NurseServiceCont;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/nurse", produces = MediaType.APPLICATION_JSON_VALUE)
public class NurseController {

    private final NurseServiceCont nurseServiceCont;


    public NurseController(NurseServiceCont nurseServiceCont) {
        this.nurseServiceCont = nurseServiceCont;
    }

    @RequestMapping(method = GET, value = "/{nurseId}")
    public ResponseEntity<NurseResponse> getNurseById(@PathVariable Long nurseId) {
        return new ResponseEntity<>(this.nurseServiceCont.getNurseById(nurseId), HttpStatus.OK);
    }

}
