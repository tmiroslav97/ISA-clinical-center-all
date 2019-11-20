package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = DbTableConstants.CLINICCENTER)
public class ClinicCenter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, unique = false, nullable = false)
    private String name;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RegistrationRequirement> registrationRequirements;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<ClinicCenterAdmin> ccAdmins;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Clinic> clinics;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private PerscriptionRecord perscriptionRecord;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private DiagnoseRecord diagnoseRecord;

    public ClinicCenter() {
        // TODO: implement
    }


}