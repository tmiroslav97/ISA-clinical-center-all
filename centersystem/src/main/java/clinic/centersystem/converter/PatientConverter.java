package clinic.centersystem.converter;

import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.Patient;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.model.enumeration.RoleEnum;

public class PatientConverter {

    public static Patient toCreatePatientFromRequest(RegistrationRequirement registrationRequirement) {
        return Patient.patientBuilder()
                .email(registrationRequirement.getEmail())
                .password(registrationRequirement.getPassword())
                .firstName(registrationRequirement.getFirstName())
                .lastName(registrationRequirement.getLastName())
                .address(registrationRequirement.getAddress())
                .city(registrationRequirement.getCity())
                .country(registrationRequirement.getCountry())
                .isActivated(false)
                .enabled(true)
                .phoneNum(registrationRequirement.getPhoneNum())
                .role(RoleEnum.ROLE_PATIENT)
                .unoip(registrationRequirement.getUnoip())
                .build();
    }
}

