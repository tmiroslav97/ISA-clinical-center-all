package clinic.centersystem.model;

import clinic.centersystem.model.enumeration.AppStateEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "appoint")
public class Appointment {

    @Id
    @GeneratedValue
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "dateTime", unique = false, nullable = false)
    private Long dateTime;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private AppointmentType type;

    @Column(name = "appState", unique = false, nullable = false)
    private AppStateEnum appState;

    @Column(name = "startTime", unique = false, nullable = false)
    private Long startTime;

    @Column(name = "endTime", unique = false, nullable = false)
    private Long endTime;

    @Column(name = "duration", unique = false, nullable = false)
    private Long duration;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private SurgExRoom surgExRoom;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Doctor doctor;

    @Column(name = "price", unique = false, nullable = false)
    private Float price;

    @Column(name = "discount", unique = false, nullable = false)
    private Float discount;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Patient patient;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private MedicalReport medicalReport;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Clinic clinic;

    public Appointment() {
        // TODO: implement
    }

}