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
@Table(name = DbTableConstants.CLINIC)
public class Clinic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, unique = false, nullable = false)
    private String name;

    @Column(name = DbColumnConstants.ADDRESS, unique = false, nullable = false)
    private String address;

    @Column(name = DbColumnConstants.DESCRIPTION, unique = false, nullable = false)
    private String description;

    @Column(name = DbColumnConstants.RATING, unique = false, nullable = false)
    private Float rating;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private BusinessReport busReport;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private PriceList priceList;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Doctor> doctors;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Nurse> nurses;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<ClinicAdmin> clinicAdmins;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<SurgExRoom> surExRooms;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Appointment> appointments;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<AbsenceRequirement> reqAbs;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<AppRequirement> appReqs;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<SurgeryRequirement> surReqs;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private ClinicCenter clinicCenter;


    public Clinic() {
        // TODO: implement
    }

}