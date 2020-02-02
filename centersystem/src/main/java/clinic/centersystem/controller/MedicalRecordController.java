package clinic.centersystem.controller;


import clinic.centersystem.model.Diagnose;
import clinic.centersystem.model.MedicalRecord;
import clinic.centersystem.service.MedicalRecordServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/med-rec", produces = MediaType.APPLICATION_JSON_VALUE)
public class MedicalRecordController {

    private final MedicalRecordServiceImpl medicalRecordService;

    public MedicalRecordController(MedicalRecordServiceImpl medicalRecordService) {
        this.medicalRecordService = medicalRecordService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<MedicalRecord> getMedicalRecordById(@PathVariable Long id) {
        return new ResponseEntity<>(this.medicalRecordService.findById(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/app/{id}", method = RequestMethod.GET)
    public ResponseEntity<MedicalRecord> getMedicalRecordByAppId(@PathVariable Long id) {
        return new ResponseEntity<>(this.medicalRecordService.findByAppId(id), HttpStatus.OK);
    }
}
