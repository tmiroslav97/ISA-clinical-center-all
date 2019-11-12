package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class Surgery {

    private Long id;
    private Long dateTime;
    private SurgExRoom surgExRoom;
    private Set<Doctor> doctors;
    private Patient patient;
    private Long startTime;
    private Long endTime;
    private Long duration;

    public Surgery() {
        // TODO: implement
    }


}