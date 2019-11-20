package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;

@Getter
@Setter
@Entity
@Table(name= DbTableConstants.CLINICCENTERADMIN)
public class ClinicCenterAdmin extends User {

    @Column(name = DbColumnConstants.PREDEFINED, unique = false, nullable = true)
    private Boolean predefined;


    //private ClinicCenter clinicCenter;

    public ClinicCenterAdmin() {
        // TODO: implement
    }


}