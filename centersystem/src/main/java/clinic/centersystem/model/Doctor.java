package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import clinic.centersystem.model.enumeration.RoleEnum;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = DbTableConstants.DOCTOR)
public class Doctor extends Personnel {

    @Column(name = DbColumnConstants.SUMRATING, nullable = false)
    private Float sumRating;

    @Column(name = DbColumnConstants.CNTRATING, nullable = false)
    private Integer cntRating;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Surgery> surgeries;

    @Column(name = DbColumnConstants.STARTTIME, nullable = false)
    private Integer startTime;

    @Column(name = DbColumnConstants.ENDTIME, nullable = false)
    private Integer endTime;

    @Builder(builderMethodName = "doctorBuilder")
    public Doctor(Long id, String email, String password, String firstName, String lastName,
                  boolean enabled, RoleEnum role, boolean isFirstLog, Timestamp lastPasswordResetDate,
                  List<Authority> authorities, Clinic clinic, Calendar calendar,
                  Set<AbsenceRequirement> absenceRequirements, Set<Appointment> appointments, Float sumRating,
                  Integer cntRating, Integer startTime, Integer endTime) {
        super(id, email, password, firstName, lastName, enabled, role, isFirstLog, lastPasswordResetDate, authorities, clinic, calendar, absenceRequirements, appointments);
        this.sumRating = sumRating;
        this.cntRating = cntRating;
        this.startTime = startTime;
        this.endTime = endTime;
    }


}