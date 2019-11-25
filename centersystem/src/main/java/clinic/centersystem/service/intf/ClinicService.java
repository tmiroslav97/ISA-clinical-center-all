package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.ClinicRequestDTO;
import clinic.centersystem.model.Clinic;

import java.util.List;

public interface ClinicService {
    Clinic findById(Long id);

    List<Clinic> findAll();

    Clinic save(ClinicRequestDTO clinicRequestDTO);
}
