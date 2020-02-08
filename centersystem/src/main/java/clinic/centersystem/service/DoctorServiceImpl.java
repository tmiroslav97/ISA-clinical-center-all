package clinic.centersystem.service;

import clinic.centersystem.converter.DoctorConverter;
import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.request.DoctorSearchReqDTO;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.*;
import clinic.centersystem.repository.DoctorRepository;
import clinic.centersystem.service.intf.AppointmentService;
import clinic.centersystem.service.intf.AuthorityService;
import clinic.centersystem.service.intf.ClinicService;
import clinic.centersystem.service.intf.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthorityService authorityService;

    @Override
    public Doctor findById(Long id) {
        return this.doctorRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Doctor> findAll() {
        return this.doctorRepository.findAll();
    }

    @Override
    public List<Doctor> findAllOnClinic(Long id) {
        return null;
    }

    @Override
    public Doctor save(Doctor doctor) {
        return doctorRepository.save(doctor);
    }


    @Override
    @Transactional(propagation = Propagation.MANDATORY)
    public Doctor findOneById(Long id){
        return doctorRepository.findOneById(id);
    }


    @Override
    public void remove(Long id) {
        this.doctorRepository.deleteById(id);
    }

    @Override
    public DoctorResponse getDoctorById(Long id) {
        Doctor doctor = this.findById(id);
        return DoctorConverter.toCreateDoctorResponseFromDoctor(doctor);
    }

    @Override
    public List<DoctorResponse> getDoctors() {
        return this.findAll().stream().map(DoctorConverter::toCreateDoctorResponseFromDoctor).collect(Collectors.toList());
    }

    @Override
    public List<Doctor> searchDoctorByName(String name) {
        List<Doctor> listDoctors = new ArrayList<>();
        List<Doctor> doctors = this.findAll();
        for (Doctor doctor : doctors) {
            if (doctor.getFirstName().toLowerCase().contains(name.toLowerCase())) {
                listDoctors.add(doctor);
            }
        }
        return listDoctors;
    }

    @Override
    public List<DoctorResponse> findByClinicId(Long clinicId) {
        return doctorRepository.findByClinicId(clinicId).stream().map(DoctorConverter::toCreateDoctorResponseFromDoctor).collect(Collectors.toList());
    }

    public List<Doctor> searchDoctors(String name) {
        List<Doctor> listDoctors = new ArrayList<>();
        List<Doctor> doctors = this.doctorRepository.findAll();
        for (Doctor doctor : doctors) {
            if (doctor.getFirstName().toLowerCase().contains(name.toLowerCase())) {
                listDoctors.add(doctor);
            }
        }
        return listDoctors;
    }

    public String addDoctorOnClinic(DoctorRequestDTO doctorRequestDTO, Long id){
        Clinic clinic  = this.clinicService.findById(id);
        Doctor doctor = DoctorConverter.toCreateDoctorFromDoctorRequest(doctorRequestDTO, clinic);
        doctor.setEmail(doctorRequestDTO.getEmail());
        if(doctorRequestDTO.getPassword1().equals(doctorRequestDTO.getPassword2())){
            doctor.setPassword(doctorRequestDTO.getPassword1());
        }else{
            return "Password wasn't confirmed";
        }
        List<Authority> auths = this.authorityService.findByName("ROLE_DOCTOR");
        doctor.setAuthorities(auths);
        doctorRepository.save(doctor);
        return "Successfully added doctor on clinic";
    }

    public  String deleteDoctor (Long doctorId){
        if(appointmentService.existsByDoctorId(doctorId)){
            return "Can't delete doctor, beacause he has appointment";
        }else {
            boolean flag = false;

            if(appointmentService.existsByDoctorId(doctorId)){
                flag = true;
            }
            if(!flag) {
                doctorRepository.deleteById(doctorId);
                return  "Successfully deleted doctor";
            }else{
                return  "Can't delete the doctor";
            }
        }
    }

    public List<DoctorResponse> searchDoctor(DoctorSearchReqDTO doctorSearchReqDTO){
        return doctorRepository.findByClinicIdAndLastNameIgnoringCase(doctorSearchReqDTO.getClinicId(), doctorSearchReqDTO.getLastName()).stream().map(DoctorConverter::toCreateDoctorResponseFromDoctor).collect(Collectors.toList());
    }


}
