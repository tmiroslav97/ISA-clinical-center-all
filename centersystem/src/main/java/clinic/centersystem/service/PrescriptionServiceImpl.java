package clinic.centersystem.service;

import clinic.centersystem.converter.PrescriptionConverter;
import clinic.centersystem.dto.response.PrescriptionResponse;
import clinic.centersystem.model.MedicalReport;
import clinic.centersystem.model.Nurse;
import clinic.centersystem.model.Prescription;
import clinic.centersystem.repository.PrescriptionRepository;
import clinic.centersystem.service.intf.MedicalReportService;
import clinic.centersystem.service.intf.NurseService;
import clinic.centersystem.service.intf.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    @Autowired
    private PrescriptionService prescriptionService;

    @Autowired
    private NurseService nurseService;

    @Autowired
    private MedicalReportService medicalReportService;

    @Override
    public Prescription findById(Long id) {
        return this.prescriptionRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Prescription> findAll() {
        return this.prescriptionRepository.findAll();
    }

    @Override
    public Prescription save(Prescription prescription) {
        return this.prescriptionRepository.save(prescription);
    }

    @Override
    public List<PrescriptionResponse> findAllByClinicIdNotValidated(Long id) {
        return prescriptionRepository.findAllByClinicId(id).stream().map(PrescriptionConverter::toCreatePrescriptionResponseFromPrescription).collect(Collectors.toList());
    }

    @Override
    public List<Prescription> saveAll(List<Prescription> prescriptions) {
        return prescriptionRepository.saveAll(prescriptions);
    }

    @Override
    public String rewritePrescription(Long nurseId, Long prescriptionId) {
        Nurse nurse = nurseService.findById(nurseId);
        Prescription prescription = prescriptionService.findById(prescriptionId);
        prescription.setValidate(true);
        nurse.getPrescriptions().add(prescription);
        prescription.setNurse(nurse);

        nurse = nurseService.save(nurse);
        prescription = prescriptionService.save(prescription);
        MedicalReport medicalReport = prescription.getMedicalReport();
        return "Successfully rewrited prescription";
    }
}
