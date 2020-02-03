package clinic.centersystem.service.intf;

import clinic.centersystem.model.Prescription;

import java.util.List;
import java.util.Set;

public interface PrescriptionService {
    Prescription findById(Long id);

    List<Prescription> findAll();

    Prescription save(Prescription prescription);

    Set<Prescription> saveAll(Set<Prescription> prescriptions);
}
