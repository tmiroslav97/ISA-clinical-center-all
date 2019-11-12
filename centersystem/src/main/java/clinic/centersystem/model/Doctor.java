package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class Doctor extends Personnel {
    private Float rating;
    private Set<AppRequirement> appReqs;

    public Doctor() {
        // TODO: implement
    }


}