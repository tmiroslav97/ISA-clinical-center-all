package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Doctor;

import java.util.List;

public interface DoctorService {
    Doctor findById(Long id);

    List<Doctor> findAll();

    List<Doctor> findAllOnClinic(Long clinicId);

    Doctor save(Doctor doctor);

    void remove(Long id);

    DoctorResponse getDoctorById(Long id);

    List<DoctorResponse> getDoctors();

    List<Doctor> searchDoctorByName(String name);

    List<DoctorResponse> findByClinicId(Long clinicId);

    Doctor findOneById(Long id);
}
