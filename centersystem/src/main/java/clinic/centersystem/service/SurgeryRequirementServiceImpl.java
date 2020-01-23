package clinic.centersystem.service;

import clinic.centersystem.model.Surgery;
import clinic.centersystem.model.SurgeryRequirement;
import clinic.centersystem.repository.SurgeryRequirementRepository;
import clinic.centersystem.service.intf.SurgeryRequirementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurgeryRequirementServiceImpl implements SurgeryRequirementService {

    @Autowired
    private SurgeryRequirementRepository surgeryRequirementRepository;

    @Override
    public SurgeryRequirement findById(Long id) {
        return surgeryRequirementRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<SurgeryRequirement> findAll() {
        return surgeryRequirementRepository.findAll();
    }
}
