package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "clinicAdmin")
public class ClinicAdmin extends User {

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Clinic clinic;

    public ClinicAdmin() {
        // TODO: implement
    }

}