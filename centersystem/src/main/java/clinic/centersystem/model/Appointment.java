package clinic.centersystem.model;

import clinic.centersystem.model.enumeration.AppStateEnum;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Appointment {

    private Long id;
    private Long dateTime;
    private AppointmentType type;
    private AppStateEnum appState;
    private Long startTime;
    private Long endTime;
    private Long duration;
    private SurgExRoom surgExRoom;
    private Doctor doctor;
    private Float price;
    private Float discount;
    private Patient patient;
    private MedicalReport medicalReport;
    private Clinic clinic;

    public Appointment() {
        // TODO: implement
    }

}