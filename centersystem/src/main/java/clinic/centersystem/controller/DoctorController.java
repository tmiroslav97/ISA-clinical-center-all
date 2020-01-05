package clinic.centersystem.controller;

import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.service.DoctorServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/doctor", produces = MediaType.APPLICATION_JSON_VALUE)
public class DoctorController {

    private final DoctorServiceImpl doctorServiceImpl;

    public DoctorController(DoctorServiceImpl doctorServiceImpl){
        this.doctorServiceImpl = doctorServiceImpl;
    }


    @RequestMapping(method = GET, value = "/{doctorId}")
    public ResponseEntity<DoctorResponse> getDoctorById(@PathVariable Long doctorId) {
        return new ResponseEntity<>(this.doctorServiceImpl.getDoctorById(doctorId), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/all")
    public ResponseEntity<List<DoctorResponse>> getDoctors() {
        return new ResponseEntity<>(this.doctorServiceImpl.getDoctors(), HttpStatus.OK);
    }

    /*
    Can't understand what this method is for
    @RequestMapping(method = POST, value = "/add")
    public ResponseEntity<DoctorResponse> getDoctorById(@PathVariable Long doctorId) {
        return new ResponseEntity<>(this.doctorServiceCont.getDoctorById(doctorId), HttpStatus.OK);
    }
     */
}
