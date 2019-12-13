package clinic.centersystem.service;

import clinic.centersystem.converter.ClinicCenterAdminConverter;
import clinic.centersystem.converter.ClinicConverter;
import clinic.centersystem.converter.RegistrationRequirementConverter;
import clinic.centersystem.dto.request.*;
import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.dto.response.ClinicResponse;
import clinic.centersystem.dto.response.RegistrationRequirementResponse;
import clinic.centersystem.exception.CCANotPredefinedException;
import clinic.centersystem.exception.UserExistsException;
import clinic.centersystem.exception.UserNotFoundException;
import clinic.centersystem.model.*;
import clinic.centersystem.service.intf.*;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClinicCenterAdminServiceCont {

    @Autowired
    private ClinicCenterAdminService clinicCenterAdminService;

    @Autowired
    private RegistrationRequirementService registrationRequirementService;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PatientService patientService;

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private ClinicAdminService clinicAdminService;

    @Autowired
    private DiagnoseService diagnoseService;

    @Autowired
    private MedicineService medicineService;

    @Autowired
    private MedicineRecordService medicineRecordService;

    private static final Logger logger = LoggerFactory.getLogger(ClinicCenterAdminServiceCont.class);

    public ClinicCenterAdminResponse clinicCenterAdmin(Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.clinicCenterAdminService.findById(id);
        return ClinicCenterAdminConverter.toCreateClinicCenterAdminResponse(clinicCenterAdmin);
    }

    public List<RegistrationRequirementResponse> registrationRequirementList() {
        List<RegistrationRequirement> reqs = registrationRequirementService.findAll();
        List<RegistrationRequirementResponse> registrationRequirementResponses = new ArrayList<>();
        for (RegistrationRequirement req : reqs) {
            registrationRequirementResponses.add(RegistrationRequirementConverter.toCreateRegistrationRequirementResponse(req));
        }
        return registrationRequirementResponses;
    }

    public String approveRegistrationRequest(Long id) {
        RegistrationRequirement req = registrationRequirementService.findById(id);
        req.setPassword(passwordEncoder.encode(req.getPassword()));
        Patient patient = this.patientService.save(req);
        this.registrationRequirementService.deleteById(id);
        String subject = "";
        String answer = "";
        try {
            subject = "Account registration";
            answer = String.format(
                    "    Patient account was create successfully!\n" +
                            "    Please follow this link to activate account:\n" +
                            "    http://localhost:8080/cca/activate-account/%s"
                    , patient.getId().toString());
            emailService.sendMailTo(patient.getEmail(), subject, answer);
        } catch (Exception e) {
            System.out.println("Mail send error!");
        }
        return answer;
    }

    public String rejectRegistrationRequest(Long id, String message) {
        RegistrationRequirement req = this.registrationRequirementService.findById(id);
        String subject = "Account registration";
        this.registrationRequirementService.deleteById(id);
        try {
            emailService.sendMailTo(req.getEmail(), subject, message);
        } catch (Exception e) {
            System.out.println("Mail send error!");
        }
        return message;
    }

    public String registerCCA(CCARegReqDTO ccaRegReqDTO, Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.clinicCenterAdminService.findById(id);
        if(clinicCenterAdmin == null){
            throw new UserNotFoundException();
        }
        if (!clinicCenterAdmin.isPredefined()) {
            throw new CCANotPredefinedException();
        }
        User user = this.userService.findByUsername(ccaRegReqDTO.getEmail());
        if (user != null) {
            throw new UserExistsException();
        }
        ccaRegReqDTO.setPassword(this.passwordEncoder.encode(ccaRegReqDTO.getPassword()));
        ClinicCenterAdmin newCCAdmin = this.clinicCenterAdminService.save(ccaRegReqDTO);
        String msg = "Successfully added new clinic center administrator";
        return msg;
    }

    public String registerClinic(ClinicRequestDTO clinicRequestDTO) {
        Clinic clinic = this.clinicService.save(clinicRequestDTO);
        return "Clinic succesfully created";
    }

    public List<ClinicResponse> getClinics() {
        List<Clinic> clinics = this.clinicService.findAll();
        List<ClinicResponse> clinicResponses = new ArrayList<ClinicResponse>();
        for (Clinic clinic : clinics) {
            clinicResponses.add(ClinicConverter.toCreateClinicResponseFromClinic(clinic));
        }
        return clinicResponses;
    }

    public String activateAccount(Long id, HttpServletResponse httpServletResponse) {
        Patient patient = this.patientService.findById(id);
        patient.setActivated(true);
        patient = this.patientService.save(patient);

        httpServletResponse.setHeader("Location", "http://localhost:3000/login");
        return "Account is activated!";
    }

    public String registerClinicAdmin(ClinicAdminReqDTO clinicAdminReqDTO) {
        clinicAdminReqDTO.setPassword(this.passwordEncoder.encode(clinicAdminReqDTO.getPassword()));
        ClinicAdmin clinicAdmin = this.clinicAdminService.save(clinicAdminReqDTO);
        Clinic clinic = this.clinicService.findById(clinicAdminReqDTO.getClinicId());
        clinic.getClinicAdmins().add(clinicAdmin);
        clinicAdmin.setClinic(clinic);

        clinicAdmin = this.clinicAdminService.saveClinicAdmin(clinicAdmin);
        clinic = this.clinicService.saveClinic(clinic);

        return "Added clinic admin";
    }

    public String addDiagnose(DiagnoseRequestDTO diagnoseRequestDTO) {
        Diagnose diagnose = diagnoseService.save(diagnoseRequestDTO);

        return "Successfully added diagnose";
    }

    public String addMedicine(MedicineRequestDTO medicineRequestDTO) {
        Medicine medicine = medicineService.saveReq(medicineRequestDTO);

        

        return "Successfully added medicine";
    }

}
