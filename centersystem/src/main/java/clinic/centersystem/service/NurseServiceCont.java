package clinic.centersystem.service;


import clinic.centersystem.converter.NurseConverter;
import clinic.centersystem.dto.response.NurseResponse;
import clinic.centersystem.model.Nurse;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class NurseServiceCont {

    @Autowired
    private NurseServiceImpl nurseService;

    public NurseResponse getNurseById(Long id) {
        Nurse nurse = this.nurseService.findById(id);
        NurseResponse nurseResponse = NurseConverter.toCreateNurseResponseFromNurse(nurse);
        return nurseResponse;
    }

}
