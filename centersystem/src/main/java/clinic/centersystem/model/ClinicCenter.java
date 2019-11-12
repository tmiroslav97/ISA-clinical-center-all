package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class ClinicCenter {

    private Long id;
    private String name;
    private Set<RegistrationRequirement> registrationRequirements;
    private Set<ClinicCenterAdmin> ccAdmins;
    private Set<Clinic> clinics;
    private PerscriptionRecord perscriptionRecord;
    private DiagnoseRecord diagnoseRecord;
    
    public ClinicCenter() {
        // TODO: implement
    }


}