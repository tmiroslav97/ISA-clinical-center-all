package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.MedicalRecordRequestDTO;
import clinic.centersystem.dto.request.MedicalReportRequestDTO;
import clinic.centersystem.model.MedicalReport;

import java.util.List;

public interface MedicalReportService {

    MedicalReport findById(Long id);

    List<MedicalReport> findDoctorReports(Long id);

    String addMedicalReport(MedicalReportRequestDTO medicalReportRequestDTO);
}
