package clinic.centersystem.service;

import clinic.centersystem.converter.ClinicConverter;
import clinic.centersystem.dto.request.ClinicRequestDTO;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.repository.ClinicRepository;
import clinic.centersystem.service.intf.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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
        Clinic clinic = ClinicConverter.toCreateClinicFromRequest(clinicRequestDTO);
        clinic = this.clinicRepository.save(clinic);

        return clinic;
    }

    @Override
    public Clinic saveClinic(Clinic clinic) {
        clinic = this.clinicRepository.save(clinic);

        return clinic;
    }
}
