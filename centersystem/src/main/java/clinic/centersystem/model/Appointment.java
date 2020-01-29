package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import clinic.centersystem.model.enumeration.AppStateEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = DbTableConstants.APPOINTMENT)
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DATETIME, nullable = false)
    @Temporal(TemporalType.DATE)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime", parameters = {
            @org.hibernate.annotations.Parameter(name = "databaseZone", value = "UTC"),
            @org.hibernate.annotations.Parameter(name = "javaZone", value = "UTC")
    })
    private Long dateTime;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private AppointmentType type;

    @Column(name = DbColumnConstants.APPSTATE, nullable = false)
    private AppStateEnum appState;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Personnel personnel;

    @Column(name = DbColumnConstants.PRICE, nullable = false)
    private Float price;

    @Column(name = DbColumnConstants.DISCOUNT, nullable = false)
    private Float discount;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Patient patient;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MedicalReport medicalReport;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Clinic clinic;


}