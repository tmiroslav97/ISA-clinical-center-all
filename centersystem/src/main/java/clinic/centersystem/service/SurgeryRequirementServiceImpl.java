package clinic.centersystem.service;

import clinic.centersystem.converter.SurgeryRequirementConverter;
import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.dto.response.SurgeryRequirementResponseDTO;
import clinic.centersystem.model.Room;
import clinic.centersystem.model.Surgery;
import clinic.centersystem.model.SurgeryRequirement;
import clinic.centersystem.repository.SurgeryRequirementRepository;
import clinic.centersystem.service.intf.SurgeryRequirementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public SurgeryRequirementResponseDTO findByClinicId(Long clinicId, Integer pageCnt) {
        Pageable pageable = PageRequest.of(pageCnt, 10);
        Page<SurgeryRequirement> surgeryRequirements = surgeryRequirementRepository.findByClinicId(clinicId, pageable);
        SurgeryRequirementResponseDTO surgeryRequirementResponseDTO = new SurgeryRequirementResponseDTO();

        surgeryRequirementResponseDTO.setSurgeryRequirements(surgeryRequirements.getContent().stream().map(SurgeryRequirementConverter::fromSurReqToSurReqDTO).collect(Collectors.toList()));
        surgeryRequirementResponseDTO.setPageCount(surgeryRequirements.getTotalPages());

        return surgeryRequirementResponseDTO;
    }
}
