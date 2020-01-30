package clinic.centersystem.service;

import clinic.centersystem.model.Medicine;
import clinic.centersystem.repository.MedicineRepository;
import clinic.centersystem.service.intf.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    @Override
    public Medicine findById(Long id) {
        return medicineRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Medicine> findAll() {
        return medicineRepository.findAll();
    }

    @Override
    public Medicine save(Medicine medicine) {
        return medicineRepository.save(medicine);
    }
}
