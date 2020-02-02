package clinic.centersystem.service;

import clinic.centersystem.model.MedicalReport;
import clinic.centersystem.repository.MedicalReportRepository;
import clinic.centersystem.service.intf.MedicalReportService;
import org.springframework.beans.factory.annotation.Autowired;

public class MedicalReportImpl implements MedicalReportService {

    @Autowired
    private MedicalReportRepository medicalReportRepository;

    @Override
    public MedicalReport findById(Long id) {
        return medicalReportRepository.findById(id).orElseGet(null);
    }
}
