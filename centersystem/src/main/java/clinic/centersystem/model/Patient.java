package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = DbTableConstants.PATIENT)
public class Patient extends User {

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Clinic> clinics;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MedicalRecord medicalRecord;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Appointment> appointments;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<AppRequirement> reqApp;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Surgery> surgeries;

    @Column(name = DbColumnConstants.ISACTIVATED, unique = false, nullable = true)
    private boolean isActivated;


    public Patient() {
        // TODO: implement


    }


}