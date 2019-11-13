package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "clinicCenter")
public class ClinicCenter {

    @Id
    @GeneratedValue
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "name", unique = false, nullable = false)
    private String name;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<RegistrationRequirement> registrationRequirements;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<ClinicCenterAdmin> ccAdmins;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Clinic> clinics;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private PerscriptionRecord perscriptionRecord;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private DiagnoseRecord diagnoseRecord;

    public ClinicCenter() {
        // TODO: implement
    }


}