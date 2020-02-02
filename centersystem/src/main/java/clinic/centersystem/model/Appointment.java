package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import clinic.centersystem.model.enumeration.AppStateEnum;
import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Column(name = DbColumnConstants.PRICE, nullable = false)
    private Float price;

    @Column(name = DbColumnConstants.DISCOUNT, nullable = false)
    private Float discount;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Patient patient;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    private MedicalReport medicalReport;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Clinic clinic;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private AppointmentType type;

    @Column(name = DbColumnConstants.APPSTATE, nullable = false)
    private AppStateEnum appState;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Room room;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Doctor doctor;

}