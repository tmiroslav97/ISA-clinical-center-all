package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import clinic.centersystem.model.enumeration.RoleEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = DbTableConstants.DOCTOR)
public class Doctor extends Personnel {


    @Column(name = DbColumnConstants.SUMRATING, unique = false, nullable = false)
    private Float sumRating;

    @Column(name = DbColumnConstants.CNTRATING, unique = false, nullable = false)
    private Integer cntRating;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<AppointmentRequirement> appReqs;

    public Doctor(Long id, String email, String password, String firstName, String lastName,
                  boolean enabled, RoleEnum role, boolean isFirstLog, Timestamp lastPasswordResetDate,
                  List<Authority> authorities, Set<Patient> patients, Clinic clinic, Calendar calendar,
                  Set<AbsenceRequirement> absenceRequirements, Set<Appointment> appointments, Float sumRating,
                  Integer cntRating, Set<AppointmentRequirement> appReqs) {
        // TODO: implement
        super(id, email, password, firstName, lastName, enabled, role, isFirstLog, lastPasswordResetDate, authorities, patients, clinic, calendar, absenceRequirements, appointments);
        this.sumRating = sumRating;
        this.cntRating = cntRating;
        this.appReqs = appReqs;
    }


}