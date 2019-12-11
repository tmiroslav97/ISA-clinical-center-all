package clinic.centersystem.service.intf;

import clinic.centersystem.model.Doctor;

import java.util.List;

public interface DoctorService {
    Doctor findById(Long id);

    List<Doctor> findAll();

    List<Doctor> findAllOnClinic(Long clinicId);

    Doctor save(Doctor doctor);

    public void remove(Long id);
}
