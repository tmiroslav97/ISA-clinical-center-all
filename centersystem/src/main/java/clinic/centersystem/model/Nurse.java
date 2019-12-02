package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import clinic.centersystem.model.enumeration.RoleEnum;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = DbTableConstants.NURSE)
public class Nurse extends Personnel {

    @Builder(builderMethodName = "nurseBuilder")
    public Nurse(Long id, String email, String password, String firstName, String lastName,
                 boolean enabled, RoleEnum role, boolean isFirstLog, Timestamp lastPasswordResetDate,
                 List<Authority> authorities, Set<Patient> patients, Clinic clinic, Calendar calendar,
                 Set<AbsenceRequirement> absenceRequirements, Set<Appointment> appointments) {
        super(id, email, password, firstName, lastName, enabled, role, isFirstLog, lastPasswordResetDate, authorities, patients, clinic, calendar, absenceRequirements, appointments);

    }
}