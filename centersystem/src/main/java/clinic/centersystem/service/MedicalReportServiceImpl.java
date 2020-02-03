package clinic.centersystem.service;

import clinic.centersystem.converter.PrescriptionConverter;
import clinic.centersystem.dto.request.MedicalReportRequestDTO;
import clinic.centersystem.model.*;
import clinic.centersystem.model.enumeration.AppStateEnum;
import clinic.centersystem.repository.MedicalReportRepository;
import clinic.centersystem.service.intf.*;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MedicalReportServiceImpl implements MedicalReportService {

    @Autowired
    private MedicalReportRepository medicalReportRepository;

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private MedicineService medicineService;

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private PrescriptionService prescriptionService;

    @Autowired
    private DiagnoseService diagnoseService;

    @Autowired
    private MedicalRecordService medicalRecordService;

    @Override
    public MedicalReport findById(Long id) {
        return medicalReportRepository.findById(id).orElseGet(null);
    }

    @Override
    public String addMedicalReport(MedicalReportRequestDTO medicalReportRequestDTO) {
        Appointment appointment = appointmentService.findById(medicalReportRequestDTO.getAppId());
        Clinic clinic = clinicService.findById(appointment.getClinic().getId());
        Diagnose diagnose = diagnoseService.findById(medicalReportRequestDTO.getDiagnose());
        MedicalRecord medicalRecord = medicalRecordService.findById(medicalReportRequestDTO.getMedRecId());
        MedicalReport medicalReport = MedicalReport.builder()
                .appointment(appointment)
                .diagnose(diagnose)
                .medicalRecord(medicalRecord)
                .description(medicalReportRequestDTO.getDescription())
                .build();
        medicalReport = medicalReportRepository.save(medicalReport);

        MedicalReport medRep = medicalReport;

        if(medicalReportRequestDTO.getMedicines().size()>0) {
            List<Medicine> medicines = medicineService.findAllByIdIn(medicalReportRequestDTO.getMedicines());
            List<Prescription> prescriptions = medicines.stream().map(med -> PrescriptionConverter.toCreatePrescriptionFromMedicine(med, clinic, medRep)).collect(Collectors.toList());
            prescriptions = prescriptionService.saveAll(prescriptions);
        }else{
            appointment.setAppState(AppStateEnum.FINISHED);
        }

        appointment.setMedicalReport(medicalReport);
        appointmentService.save(appointment);

        return "Medical report added";
    }
}
