package clinic.centersystem.converter;

import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Doctor;

public class DoctorConverter {
    public static DoctorResponse toCreateDoctorResponseFromDoctor(Doctor doctor){
        return DoctorResponse.builder()
                .id(doctor.getId())
                .firstName(doctor.getFirstName())
                .lastName(doctor.getLastName())
                .email(doctor.getEmail())
                .role(doctor.getRole().name())
                .clinicId(doctor.getClinic().getId())
                .build();
    }
}
