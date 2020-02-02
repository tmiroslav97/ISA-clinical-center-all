package clinic.centersystem.service.intf;

import clinic.centersystem.model.MedicalRecord;

public interface MedicalRecordService {

    MedicalRecord findById(Long id);

    MedicalRecord findByPatientId(Long id);

    MedicalRecord save(MedicalRecord medicalRecord);

    MedicalRecord findByAppId(Long id);
}
