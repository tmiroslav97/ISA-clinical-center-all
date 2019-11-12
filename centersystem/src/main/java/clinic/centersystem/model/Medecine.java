package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Medecine {

    private Long id;
    private String name;
    private String description;
    private PerscriptionRecord perscriptionRecord;

    public Medecine() {
        // TODO: implement
    }

}