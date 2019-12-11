package clinic.centersystem.service;

import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Doctor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClinicAdministratorService {
    @Autowired
    private ClinicAdministratorService clinicAdministratorService;
    @Autowired
    private DoctorServiceImpl doctorService;

    public String addDoctor(DoctorRequestDTO doctorRequestDTO) {
        Doctor doc = DoctorConverter.toCreateDoctorFromDoctorRequest(doctorRequestDTO);
        Doctor doctor = doctorService.save(doc);

        return "Successfully added doctor";
    }

    public List<DoctorResponse> getDoctors(){
        List<Doctor>doctors=this.doctorService.findAll();
        List<DoctorResponse>doctorResponses = new ArrayList<DoctorResponse>();
        for(Doctor doctor : doctors){
            doctorResponses.add(DoctorConverter.toCreateDoctorResponseFromDoctor(doctor));
        }
        return doctorResponses;
    }

}
