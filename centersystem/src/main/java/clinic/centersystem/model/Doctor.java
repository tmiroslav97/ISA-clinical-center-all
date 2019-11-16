package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = DbColumnConstants.DOCTOR)
public class Doctor extends Personnel {

    @Column(name = DbColumnConstants.RATING, unique = false, nullable = false)
    private Float rating;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<AppRequirement> appReqs;

    public Doctor() {
        // TODO: implement
    }


}