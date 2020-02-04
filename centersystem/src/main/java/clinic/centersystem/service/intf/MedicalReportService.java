package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.MedicalRecordRequestDTO;
import clinic.centersystem.dto.request.MedicalReportRequestDTO;
import clinic.centersystem.model.MedicalReport;

public interface MedicalReportService {

    MedicalReport findById(Long id);

    String addMedicalReport(MedicalReportRequestDTO medicalReportRequestDTO);
}
