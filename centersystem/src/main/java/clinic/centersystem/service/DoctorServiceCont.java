package clinic.centersystem.service;


import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Doctor;
import clinic.centersystem.repository.DoctorRepository;
import clinic.centersystem.service.intf.DoctorService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class DoctorServiceCont {
    @Autowired
    private DoctorService doctorService;

    private DoctorResponse getDoctorById(Long id){
        Doctor doctor = this.doctorService.findById(id);
    }
}
