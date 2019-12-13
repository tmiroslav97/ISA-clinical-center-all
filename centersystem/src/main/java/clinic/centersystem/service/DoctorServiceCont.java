package clinic.centersystem.service;


import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Doctor;
import clinic.centersystem.repository.DoctorRepository;
import clinic.centersystem.service.intf.DoctorService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
public class DoctorServiceCont {
    @Autowired
    private DoctorService doctorService;

    public DoctorResponse getDoctorById(Long id){
        Doctor doctor = this.doctorService.findById(id);
        DoctorResponse doctorResponse = DoctorConverter.toCreateDoctorResponseFromDoctor(doctor);
        return doctorResponse;
    }

    public List<Doctor> getDoctors() {
        return doctorService.findAll();
    }

    public List<Doctor> searchDoctorByName(String name){
        List<Doctor> listDoctors = new ArrayList<>();
        List<Doctor>doctors= this.doctorService.findAll();
        for (Doctor doctor:doctors){
            if(doctor.getFirstName().toLowerCase().contains(name.toLowerCase())){
                listDoctors.add(doctor);
            }
        }
        return listDoctors;
    }




}
