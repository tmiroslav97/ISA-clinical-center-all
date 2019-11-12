package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RegistrationRequirement {

    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String password;
    private ClinicCenter clinicCenter;

    public RegistrationRequirement() {
    }

}