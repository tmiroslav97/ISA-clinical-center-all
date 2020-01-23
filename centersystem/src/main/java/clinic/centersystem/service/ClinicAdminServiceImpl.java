package clinic.centersystem.service;

import clinic.centersystem.converter.AppointmentTypeConverter;
import clinic.centersystem.converter.ClinicAdminConverter;
import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.dto.request.AppointmentTypeRequestDTO;
import clinic.centersystem.dto.request.ClinicAdminReqDTO;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.ClinicAdministratoreResponse;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.AppointmentType;
import clinic.centersystem.model.Authority;
import clinic.centersystem.model.ClinicAdmin;
import clinic.centersystem.model.Doctor;
import clinic.centersystem.repository.ClinicAdminRepository;
import clinic.centersystem.service.intf.AuthorityService;
import clinic.centersystem.service.intf.ClinicAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class  ClinicAdminServiceImpl implements ClinicAdminService {

    @Autowired
    private ClinicAdminRepository clinicAdminRepository;

    @Autowired
    private DoctorServiceImpl doctorService;
    @Autowired
    private AppointmentTypeServiceImpl appointmentTypeService;



    @Override
    public ClinicAdmin findById(Long id) {

        return this.clinicAdminRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<ClinicAdmin> findAll() {

        return this.clinicAdminRepository.findAll();
    }

    @Override
    public ClinicAdmin save(ClinicAdminReqDTO clinicAdminReqDTO) {
        ClinicAdmin clinicAdmin = ClinicAdminConverter.toCreateClinicAdminFromRequest(clinicAdminReqDTO);

        clinicAdmin = this.clinicAdminRepository.save(clinicAdmin);

        return clinicAdmin;
    }

    @Override
    public ClinicAdmin saveClinicAdmin(ClinicAdmin clinicAdmin) {
        clinicAdmin = this.clinicAdminRepository.save(clinicAdmin);

        return clinicAdmin;
    }

    public ClinicAdministratoreResponse clinicAdministrator(Long id) {
        ClinicAdmin clinicAdmin = this.findById(id);
        return ClinicAdminConverter.toCreateClinicAdminResponse(clinicAdmin);
    }





    /*public String addAppointmentType(AppointmentTypeRequestDTO diagnoseRequestDTO) {
        AppointmentType appointment = diagnoseService.save(diagnoseRequestDTO);

        return "Successfully added apType;
    }*/

    public String deleteDoctor(Long id) {
        List<Doctor> doctors = this.doctorService.findAll();
        Doctor doctor = this.doctorService.findById(id);
        doctors.remove(doctor);
        return "Successfully deleted doctor";
    }

    public String deleteAppointmentType(Long id) {
        List<AppointmentType> appointmentTypes = this.appointmentTypeService.findAll();
        AppointmentType appointmentType = this.appointmentTypeService.findById(id);
        appointmentTypes.remove(appointmentType);
        return "Successfully deleted doctor";
    }



}
