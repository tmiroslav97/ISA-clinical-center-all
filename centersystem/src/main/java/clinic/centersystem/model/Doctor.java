package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
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
    private Set<AppRequirement> appReqs;

    public Doctor() {
        // TODO: implement
    }


}