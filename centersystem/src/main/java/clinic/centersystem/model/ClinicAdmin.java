package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClinicAdmin extends User {

    private Clinic clinic;

    public ClinicAdmin() {
        // TODO: implement
    }

}