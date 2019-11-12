package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AppointmentType {

    private Long id;
    private String type;

    public AppointmentType() {

    }
}
