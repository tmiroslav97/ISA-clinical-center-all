package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClinicCenterAdmin extends User {

    private Boolean predefined;
    private ClinicCenter clinicCenter;

    public ClinicCenterAdmin() {
        // TODO: implement
    }


}