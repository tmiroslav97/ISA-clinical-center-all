package clinic.centersystem.service;

import clinic.centersystem.model.Clinic;
import clinic.centersystem.model.ClinicCenterAdmin;
import clinic.centersystem.repository.ClinicCenterAdminRepository;
import clinic.centersystem.service.intf.ClinicCenterAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicCenterAdminServiceImpl implements ClinicCenterAdminService {

    @Autowired
    private ClinicCenterAdminRepository clinicCenterAdminRepository;

    @Override
    public ClinicCenterAdmin findById(Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.clinicCenterAdminRepository.findById(id).orElseGet(null);
        return clinicCenterAdmin;
    }

    @Override
    public List<ClinicCenterAdmin> findAll() {
        return null;
    }

    @Override
    public ClinicCenterAdmin save() {
        return null;
    }
}
