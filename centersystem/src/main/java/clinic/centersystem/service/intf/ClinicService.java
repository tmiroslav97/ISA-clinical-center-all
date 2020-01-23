package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.ClinicRequestDTO;
import clinic.centersystem.dto.response.ClinicResponse;
import clinic.centersystem.model.Clinic;

import java.util.List;

public interface ClinicService {
    Clinic findById(Long id);

    List<Clinic> findAll();

    Clinic save(ClinicRequestDTO clinicRequestDTO);

    Clinic saveClinic(Clinic clinic);

    boolean existsByName(String name);

    List<ClinicResponse> getClinics();

    boolean registerClinic(ClinicRequestDTO clinicRequestDTO);
}
