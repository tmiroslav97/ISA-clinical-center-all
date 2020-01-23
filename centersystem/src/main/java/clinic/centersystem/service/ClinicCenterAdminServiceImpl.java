package clinic.centersystem.service;

import clinic.centersystem.converter.ClinicCenterAdminConverter;
import clinic.centersystem.converter.ClinicConverter;
import clinic.centersystem.converter.RegistrationRequirementConverter;
import clinic.centersystem.dto.request.CCARegReqDTO;
import clinic.centersystem.dto.request.ClinicAdminReqDTO;
import clinic.centersystem.dto.request.ClinicRequestDTO;
import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.dto.response.ClinicResponse;
import clinic.centersystem.dto.response.RegistrationRequirementResponse;
import clinic.centersystem.exception.CCANotPredefinedException;
import clinic.centersystem.exception.UserExistsException;
import clinic.centersystem.exception.UserNotFoundException;
import clinic.centersystem.model.*;
import clinic.centersystem.repository.ClinicCenterAdminRepository;
import clinic.centersystem.service.intf.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClinicCenterAdminServiceImpl implements ClinicCenterAdminService {

    @Autowired
    private ClinicCenterAdminRepository clinicCenterAdminRepository;

    @Autowired
    private AuthorityService authorityService;

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

    private static final Logger logger = LoggerFactory.getLogger(ClinicCenterAdminServiceImpl.class);

    @Override
    public ClinicCenterAdmin findById(Long id) {
        return this.clinicCenterAdminRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public List<ClinicCenterAdmin> findAll() {
        return null;
    }

    @Override
    public ClinicCenterAdmin save(CCARegReqDTO ccaRegReqDTO) {
        ClinicCenterAdmin clinicCenterAdmin = ClinicCenterAdminConverter.toCreateClinicCenterAdmin(ccaRegReqDTO);
        List<Authority> auths = this.authorityService.findByName("ROLE_CCADMIN");
        clinicCenterAdmin.setAuthorities(auths);
        clinicCenterAdmin = this.clinicCenterAdminRepository.save(clinicCenterAdmin);
        return clinicCenterAdmin;
    }

    @Override
    public ClinicCenterAdminResponse clinicCenterAdmin(Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.findById(id);
        return ClinicCenterAdminConverter.toCreateClinicCenterAdminResponse(clinicCenterAdmin);
    }

    @Override
    public String registerCCA(CCARegReqDTO ccaRegReqDTO, Long id) {
        ClinicCenterAdmin clinicCenterAdmin = this.findById(id);
        if (!clinicCenterAdmin.isPredefined()) {
            throw new CCANotPredefinedException();
        }
        User user = this.userService.findByUsername(ccaRegReqDTO.getEmail());
        if (user != null) {
            throw new UserExistsException();
        }
        ccaRegReqDTO.setPassword(this.passwordEncoder.encode(ccaRegReqDTO.getPassword()));
        ClinicCenterAdmin newCCAdmin = this.save(ccaRegReqDTO);
        String msg = "Successfully added new clinic center administrator";
        return msg;
    }




}
