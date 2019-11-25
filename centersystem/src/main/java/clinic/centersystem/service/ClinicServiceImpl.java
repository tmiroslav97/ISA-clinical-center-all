package clinic.centersystem.service;

import clinic.centersystem.dto.request.ClinicRequestDTO;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.repository.ClinicRepository;
import clinic.centersystem.service.intf.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ClinicServiceImpl implements ClinicService {

    @Autowired
    private ClinicRepository clinicRepository;

    @Override
    public Clinic findById(Long id) {
        return this.clinicRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Clinic> findAll() {
        return this.clinicRepository.findAll();
    }

    @Override
    public Clinic save(ClinicRequestDTO clinicRequestDTO) {
        return null;
    }
}
