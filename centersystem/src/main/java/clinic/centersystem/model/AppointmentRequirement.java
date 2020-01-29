package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import clinic.centersystem.model.enumeration.AppStateEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = DbTableConstants.APPREQUIREMENT)
public class AppointmentRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DATETIME, unique = false, nullable = false)
    private Long dateTime;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private AppointmentType type;

    @Column(name = DbColumnConstants.APPSTATE, unique = false, nullable = false)
    private AppStateEnum appState;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Patient patient;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Clinic clinic;

}
