package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "doctor")
public class Doctor extends Personnel {

    @Column(name = "sumRating", unique = false, nullable = false)
    private Float sumRating;

    @Column(name = "cntRating", unique = false, nullable = false)
    private Integer cntRating;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<AppRequirement> appReqs;

    public Doctor() {
        // TODO: implement
    }


}