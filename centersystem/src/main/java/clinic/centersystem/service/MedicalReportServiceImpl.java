package clinic.centersystem.service;

import clinic.centersystem.dto.request.MedicalRecordRequestDTO;
import clinic.centersystem.dto.request.MedicalReportRequestDTO;
import clinic.centersystem.model.Appointment;
import clinic.centersystem.model.MedicalReport;
import clinic.centersystem.repository.MedicalReportRepository;
import clinic.centersystem.service.intf.AppointmentTypeService;
import clinic.centersystem.service.intf.MedicalReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalReportServiceImpl implements MedicalReportService {

    @Autowired
    private MedicalReportRepository medicalReportRepository;
    
    @Override
    public MedicalReport findById(Long id) {
        return medicalReportRepository.findById(id).orElseGet(null);
    }

    @Override
    public String addMedicalReport(MedicalRecordRequestDTO medicalRecordRequestDTO) {
        return "Medical report added";
    }
}
