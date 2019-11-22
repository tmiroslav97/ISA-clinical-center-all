package clinic.centersystem.converter;

import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.Patient;
import clinic.centersystem.model.enumeration.RoleEnum;

public class PatientConverter {

    public static Patient toCreatePatientFromRequest(RegistrationRequirementDTO registrationRequirementDTO) {
        return Patient.patientBuilder()
                .email(registrationRequirementDTO.getEmail())
                .password(registrationRequirementDTO.getPassword())
                .firstName(registrationRequirementDTO.getFirstName())
                .lastName(registrationRequirementDTO.getLastName())
                .address(registrationRequirementDTO.getAddress())
                .city(registrationRequirementDTO.getCity())
                .country(registrationRequirementDTO.getCountry())
                .isActivated(false)
                .enabled(true)
                .phoneNum(registrationRequirementDTO.getPhoneNum())
                .role(RoleEnum.ROLE_PATIENT)
                .unoip(registrationRequirementDTO.getUnoip())
                .build();
    }
}

