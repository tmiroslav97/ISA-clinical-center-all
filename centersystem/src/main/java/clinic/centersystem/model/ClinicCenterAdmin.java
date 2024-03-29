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
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = DbTableConstants.CLINICCENTERADMIN)
public class ClinicCenterAdmin extends User {

    @Column(name = DbColumnConstants.PREDEFINED)
    private boolean predefined;

    @Builder(builderMethodName = "clinicCenterAdminBuilder")
    public ClinicCenterAdmin(Long id, String email, String password, String firstName, String lastName,
                             boolean enabled, boolean isFirstLog, Timestamp lastPasswordResetDate,
                             List<Authority> authorities, boolean predefined, Long version) {
        super(id, email, password, firstName, lastName, enabled, isFirstLog, lastPasswordResetDate, authorities, version);
        this.predefined = predefined;
    }
}