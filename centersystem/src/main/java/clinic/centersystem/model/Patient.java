package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class Patient extends User {

    private MedicalRecord medicalRecord;
    private Set<Clinic> clinics;
    private Set<Appointment> appointments;
    private Set<AppRequirement> reqApp;
    private Set<Surgery> surgeries;
    private boolean isActivated;

    public Patient() {
        // TODO: implement
    }

}