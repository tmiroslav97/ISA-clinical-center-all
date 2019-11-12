package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BusinessReport {

    private Long id;
    private Float clinicRating;
    private Float doctorRating;
    private Float graphic;
    private Float income;
    private Clinic clinic;

    public BusinessReport() {
        // TODO: implement
    }

}