package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;

@Getter
@Setter
@Entity
@Table(name="clinicCenterAdmin")
public class ClinicCenterAdmin extends User {

    @Column(name = "predefined", unique = false, nullable = true)
    private Boolean predefined;

    //treba mapirati
    //private ClinicCenter clinicCenter;

    public ClinicCenterAdmin() {
        // TODO: implement
    }


}