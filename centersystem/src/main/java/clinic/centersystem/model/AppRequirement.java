package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.model.enumeration.AppStateEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = DbColumnConstants.APPREQUIREMENT)
public class AppRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DATETIME, unique = false, nullable = false)
    private Long dateTime;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private AppointmentType type;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Doctor doctor;

    @Column(name = DbColumnConstants.APPSTATE, unique = false, nullable = false)
    private AppStateEnum appState;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private User aplicant;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Clinic clinic;

    public AppRequirement() {

    }
}
