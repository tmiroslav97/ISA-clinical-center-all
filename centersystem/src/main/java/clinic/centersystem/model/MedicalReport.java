package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class MedicalReport {

    private Long id;
    private String description;
    private Set<Diagnose> diagnoses;
    private Set<Recepie> recepies;
    private Appointment appointment;
    private MedicalRecord medicalRecord;

    public MedicalReport() {
        // TODO: implement
    }

}