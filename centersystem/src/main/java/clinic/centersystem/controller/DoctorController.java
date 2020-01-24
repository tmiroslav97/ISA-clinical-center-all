package clinic.centersystem.controller;

import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Authority;
import clinic.centersystem.model.Doctor;
import clinic.centersystem.service.DoctorServiceImpl;
import clinic.centersystem.service.intf.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/doctor", produces = MediaType.APPLICATION_JSON_VALUE)
public class DoctorController {

    private final DoctorServiceImpl doctorService;

    public DoctorController(DoctorServiceImpl doctorService) {
        this.doctorService = doctorService;
    }

    @RequestMapping(method = GET, value = "/{doctorId}")
    public ResponseEntity<DoctorResponse> getDoctorById(@PathVariable Long doctorId) {
        return new ResponseEntity<>(this.doctorService.getDoctorById(doctorId), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/doctors")
    public ResponseEntity<List<DoctorResponse>> getDoctors() {
        return new ResponseEntity<List<DoctorResponse>>(this.doctorService.getDoctors(), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/search-doctors")
    public ResponseEntity<List<Doctor>> searchDoctors(@PathVariable String name) {
        return new ResponseEntity<List<Doctor>>(this.doctorService.searchDoctors(name), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value = "/add-doctor")
    public ResponseEntity<String> addDoctor(@RequestBody DoctorRequestDTO doctorRequestDTO) {
        return new ResponseEntity<>(this.doctorService.addDoctor(doctorRequestDTO), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/all/{clinicId}")
    public ResponseEntity<List<DoctorResponse>> addDoctor(@PathVariable Long clinicId) {
        return new ResponseEntity<>(doctorService.findByClinicId(clinicId), HttpStatus.OK);
    }



    /*
    Can't understand what this method is for
    @RequestMapping(method = POST, value = "/add")
    public ResponseEntity<DoctorResponse> getDoctorById(@PathVariable Long doctorId) {
        return new ResponseEntity<>(this.doctorServiceCont.getDoctorById(doctorId), HttpStatus.OK);
    }
     */
}
