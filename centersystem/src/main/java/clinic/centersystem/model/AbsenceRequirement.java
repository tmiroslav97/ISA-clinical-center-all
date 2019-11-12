package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AbsenceRequirement {

    private Long id;
    private String type;
    private Long startDate;
    private Long endDate;
    private Personnel personnel;
    private Clinic clinic;

    public AbsenceRequirement() {

    }
}
