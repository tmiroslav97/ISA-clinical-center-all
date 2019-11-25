package clinic.centersystem.service;

import clinic.centersystem.converter.ClinicCenterAdminConverter;
import clinic.centersystem.converter.PatientConverter;
import clinic.centersystem.converter.RegistrationRequirementConverter;
import clinic.centersystem.dto.request.CCARegReqDTO;
import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.dto.response.RegistrationRequirementResponse;
import clinic.centersystem.model.ClinicCenterAdmin;
import clinic.centersystem.model.Patient;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.model.User;
import clinic.centersystem.service.intf.ClinicCenterAdminService;
import clinic.centersystem.service.intf.PatientService;
import clinic.centersystem.service.intf.RegistrationRequirementService;
import clinic.centersystem.service.intf.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClinicCenterAdministratorService {

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

    private static final Logger logger = LoggerFactory.getLogger(ClinicCenterAdministratorService.class);

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
        String answer = "Patient account was created successfully";
        String subject = "Account registration";
        req.setPassword(passwordEncoder.encode(req.getPassword()));
        Patient patient = this.patientService.save(req);
        try {
            emailService.sendMailTo(patient, subject, answer);
        } catch (Exception e) {
            System.out.println("Mail send error!");
        }
        return answer;
    }

    public String rejectRegistrationRequest(Long id, String message) {
        RegistrationRequirement req = registrationRequirementService.findById(id);
        String subject = "Account registration";
        req.setPassword(passwordEncoder.encode(req.getPassword()));
        Patient patient = PatientConverter.toCreatePatientFromRequest(req);
        try {
            emailService.sendMailTo(patient, subject, message);
        } catch (Exception e) {
            System.out.println("Mail send error!");
        }
        return message;
    }

    public String registerCCA(CCARegReqDTO ccaRegReqDTO, Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.clinicCenterAdminService.findById(id);
        String msg = "";
        if (!clinicCenterAdmin.isPredefined()) {
            msg = "You are not predefined clinic center administrator, you don't have rights to create new";
            return msg;
        }
        User user = this.userService.findByUsername(ccaRegReqDTO.getEmail());
        if (user != null) {
            msg = "Email is already taken by another user";
        }
        ccaRegReqDTO.setPassword(this.passwordEncoder.encode(ccaRegReqDTO.getPassword()));
        ClinicCenterAdmin newCCAdmin = this.clinicCenterAdminService.save(ccaRegReqDTO);
        msg = "Successfully added new clinic center administrator";
        return msg;
    }

}
