package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Calendar;
import java.util.Set;

@Getter
@Setter
public class Personnel extends User {

    private Set<Patient> patients;
    private Clinic clinic;
    private Calendar calendar;
    private Set<AbsenceRequirement> reqAbs;
    private Set<Appointment> appointments;

    public Personnel() {
    }
}
