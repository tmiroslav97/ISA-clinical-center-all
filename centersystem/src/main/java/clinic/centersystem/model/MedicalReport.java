package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = DbColumnConstants.MEDICALREPORT)
public class MedicalReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DESCRIPTION, unique = false, nullable = false)
    private String description;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Diagnose> diagnoses;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Recepie> recepies;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Appointment appointment;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private MedicalRecord medicalRecord;

    public MedicalReport() {
        // TODO: implement
    }

}