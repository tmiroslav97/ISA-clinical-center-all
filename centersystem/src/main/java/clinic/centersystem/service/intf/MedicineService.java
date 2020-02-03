package clinic.centersystem.service.intf;

import clinic.centersystem.dto.response.MedicineResponseDTO;
import clinic.centersystem.model.Medicine;

import java.util.List;
import java.util.Set;

public interface MedicineService {

    Medicine findById(Long id);

    List<Medicine> findAll();

    MedicineResponseDTO findAll(Integer pageCnt);

    Medicine save(Medicine medicine);

    Set<Medicine> findAllByIdIn(Set<Long> medicines);
}
