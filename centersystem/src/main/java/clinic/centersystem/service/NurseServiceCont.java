package clinic.centersystem.service;


import clinic.centersystem.converter.NurseConverter;
import clinic.centersystem.converter.RecepieConverter;
import clinic.centersystem.dto.response.NurseResponse;
import clinic.centersystem.dto.response.RecepieResponse;
import clinic.centersystem.model.Nurse;
import clinic.centersystem.model.Prescription;
import clinic.centersystem.service.intf.PrescriptionService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
public class NurseServiceCont {

    @Autowired
    private NurseServiceImpl nurseService;

    @Autowired
    private PrescriptionService prescriptionService;

    public NurseResponse getNurseById(Long id) {
        Nurse nurse = this.nurseService.findById(id);
        NurseResponse nurseResponse = NurseConverter.toCreateNurseResponseFromNurse(nurse);
        return nurseResponse;
    }

    public String rewriteRecepie(Long nurseId, Long recepieId) {
        Nurse nurse = nurseService.findById(nurseId);
        Prescription prescription = prescriptionService.findById(recepieId);

        prescription.setValidate(true);
        nurse.getRecepies().add(prescription);
        prescription.setNurse(nurse);

        nurse = nurseService.save(nurse);
        prescription = prescriptionService.save(prescription);

        return "Successfullt rewrite recepie";
    }

    public List<RecepieResponse> getRecepies() {
        List<Prescription> recepies = this.prescriptionService.findAll();
        List<RecepieResponse> recepieResponses = new ArrayList<RecepieResponse>();
        for (Prescription prescription : recepies) {
            if (!prescription.isValidate()) {
                recepieResponses.add(RecepieConverter.toCreateRecepieResponseFromRecepie(prescription));
            }
        }

        return recepieResponses;
    }

}
