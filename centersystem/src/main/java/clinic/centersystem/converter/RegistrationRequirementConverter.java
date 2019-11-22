package clinic.centersystem.converter;

import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.RegistrationRequirement;

public class RegistrationRequirementConverter {

    public static RegistrationRequirement toCreateRegistrationRequirement(RegistrationRequirementDTO request) {
        return RegistrationRequirement.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .password2(request.getPassword2())
                .city(request.getCity())
                .country(request.getCountry())
                .address(request.getAddress())
                .phoneNum(request.getPhoneNum())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .unoip(request.getUnoip())
                .build();
    }

}
