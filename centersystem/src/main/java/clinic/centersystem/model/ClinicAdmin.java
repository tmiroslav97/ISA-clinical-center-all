package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = DbColumnConstants.CLINICADMIN)
public class ClinicAdmin extends User {

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Clinic clinic;

    public ClinicAdmin() {
        // TODO: implement
    }

}