package clinic.centersystem.service;

import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.model.Doctor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
