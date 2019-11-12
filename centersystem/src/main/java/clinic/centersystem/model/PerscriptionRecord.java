package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class PerscriptionRecord {

    private Long id;
    private Set<Medecine> medecines;
    private ClinicCenter clinicCenter;

    public PerscriptionRecord() {

    }
}
