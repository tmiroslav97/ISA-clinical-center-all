package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class Personnel extends User {
    private Set<Patient> patients;
    private Clinic clinic;
    private Set<AbsenceRequirement> reqAbs;

    public Personnel() {
    }
}
