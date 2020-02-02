package clinic.centersystem.service.intf;

import clinic.centersystem.model.MedicalReport;

public interface MedicalReportService {

    MedicalReport findById(Long id);
}
