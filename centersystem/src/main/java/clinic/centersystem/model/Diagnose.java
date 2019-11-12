package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Diagnose {

    private Long id;
    private String name;
    private String description;
    private DiagnoseRecord diagnoseRecord;

    public Diagnose() {
        // TODO: implement
    }

}