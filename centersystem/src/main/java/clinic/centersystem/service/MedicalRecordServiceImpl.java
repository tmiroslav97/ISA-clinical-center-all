package clinic.centersystem.service;

import clinic.centersystem.model.MedicalRecord;
import clinic.centersystem.repository.MedicalRecordRepository;
import clinic.centersystem.service.intf.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalRecordServiceImpl implements MedicalRecordService {

    @Autowired
    private MedicalRecordRepository medicalRecordRepository;

    @Override
    public MedicalRecord findById(Long id) {
        return medicalRecordRepository.findById(id).orElseGet(null);
    }

    @Override
    public MedicalRecord findByPatientId(Long id) {
        return medicalRecordRepository.findByPatientId(id);
    }

    @Override
    public MedicalRecord save(MedicalRecord medicalRecord) {
        return medicalRecordRepository.save(medicalRecord);
    }

    @Override
    public MedicalRecord findByAppId(Long id) {
        return medicalRecordRepository.findByAppId(id);
    }
}