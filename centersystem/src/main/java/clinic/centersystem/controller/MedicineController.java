package clinic.centersystem.controller;

import clinic.centersystem.model.Medicine;
import clinic.centersystem.service.MedicineServiceImpl;
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
@RequestMapping(value = "/medicine", produces = MediaType.APPLICATION_JSON_VALUE)
public class MedicineController {

    private final MedicineServiceImpl medicineService;

    public MedicineController(MedicineServiceImpl medicineService) {
        this.medicineService = medicineService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Medicine>> getMedicines() {
        return new ResponseEntity<>(this.medicineService.findAll(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('CCADMIN')")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<String> addMedicine(@RequestBody Medicine medicine) {
        this.medicineService.save(medicine);
        return new ResponseEntity<>("Code successfuly added", HttpStatus.OK);
    }
}
