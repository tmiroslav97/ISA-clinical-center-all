package clinic.centersystem.service;

import clinic.centersystem.dto.response.DiagnoseResponseDTO;
import clinic.centersystem.dto.response.MedicineResponseDTO;
import clinic.centersystem.model.Diagnose;
import clinic.centersystem.model.Medicine;
import clinic.centersystem.repository.DiagnoseRepository;
import clinic.centersystem.service.intf.DiagnoseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiagnoseServiceImpl implements DiagnoseService {

    @Autowired
    private DiagnoseRepository diagnoseRepository;

    @Override
    public Diagnose findById(Long id) {
        return diagnoseRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Diagnose> findAll() {
        return diagnoseRepository.findAll();
    }

    @Override
    public DiagnoseResponseDTO findAll(Integer pageCnt) {
        Pageable pageable = PageRequest.of(pageCnt, 10);
        Page<Diagnose> diagnoses = diagnoseRepository.findAll(pageable);

        DiagnoseResponseDTO diagnoseResponseDTO = DiagnoseResponseDTO.builder()
                .diagnoses(diagnoses.getContent())
                .diagnosePageCnt(diagnoses.getTotalPages())
                .build();

        return diagnoseResponseDTO;
    }

    @Override
    public Diagnose save(Diagnose diagnose) {
        return diagnoseRepository.save(diagnose);
    }
}

