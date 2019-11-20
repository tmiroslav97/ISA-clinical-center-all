package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = DbTableConstants.PERSONNEL)
public class Personnel extends User {

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Patient> patients;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Clinic clinic;

    @Column(name = DbColumnConstants.CALENDAR, nullable = false)
    private Calendar calendar;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<AbsenceRequirement> reqAbs;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Appointment> appointments;

    public Personnel() {
    }
}
