package clinic.centersystem.model;

import clinic.centersystem.model.enumeration.AppStateEnum;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AppRequirement {

    private Long id;
    private Long dateTime;
    private AppointmentType type;
    private Doctor doctor;
    private AppStateEnum appState;
    private User aplicant;
    private Clinic clinic;

    public AppRequirement() {

    }
}
