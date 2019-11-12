package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Recepie {

    private Long id;
    private Nurse nurse;
    private Medecine medecine;
    private boolean isValidate;
    private MedicalReport medicalReport;

    public Recepie() {
        // TODO: implement
    }


}