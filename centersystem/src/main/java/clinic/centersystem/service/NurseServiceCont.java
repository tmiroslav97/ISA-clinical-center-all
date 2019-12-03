package clinic.centersystem.service;


import clinic.centersystem.model.Nurse;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class NurseServiceCont {

    @Autowired
    private NurseServiceImpl nurseService;
    

}
