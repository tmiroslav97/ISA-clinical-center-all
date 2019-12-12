package clinic.centersystem.service;

import clinic.centersystem.converter.AppointmentTypeConverter;
import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.dto.request.AppointmentTypeRequestDTO;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.AppointmentTypeResponse;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.AppointmentType;
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
    @Autowired
    private AppointmentTypeServiceImpl appointmentTypeService;

    public String addDoctor(DoctorRequestDTO doctorRequestDTO) {
        Doctor doc = DoctorConverter.toCreateDoctorFromDoctorRequest(doctorRequestDTO);
        Doctor doctor = doctorService.save(doc);

        return "Successfully added doctor";
    }

    public String addAppointmentType(AppointmentTypeRequestDTO appointmentTypeRequestDTO){
        AppointmentType appointment = AppointmentTypeConverter.toCreateAppointmentTypeFromRequest(appointmentTypeRequestDTO);
        AppointmentType appointmentType = appointmentTypeService.save(appointment);

        return  "Successfully added appointment type";
    }
    public String deleteDoctor(Long id) {
        List<Doctor>doctors=this.doctorService.findAll();
        Doctor doctor=this.doctorService.findById(id);
        doctors.remove(doctor);
        return "Successfully deleted doctor";
    }


    public List<DoctorResponse> getDoctors(){
        List<Doctor>doctors=this.doctorService.findAll();
        List<DoctorResponse>doctorResponses = new ArrayList<DoctorResponse>();
        for(Doctor doctor : doctors){
            doctorResponses.add(DoctorConverter.toCreateDoctorResponseFromDoctor(doctor));
        }
        return doctorResponses;
    }

    public List<AppointmentTypeResponse> getAppointmentTypes(){
        List<AppointmentType> appointmentTypes = this.appointmentTypeService.findAll();
        List<AppointmentTypeResponse> appointmentTypeResponses = new ArrayList<AppointmentTypeResponse>();
        for(AppointmentType appointmentType : appointmentTypes){
            appointmentTypeResponses.add(AppointmentTypeConverter.toCreateAppointmentTypeFromAppointmentType(appointmentType));
        }
        return appointmentTypeResponses;
    }

}
