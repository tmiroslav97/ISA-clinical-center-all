package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = DbTableConstants.APPOINTMENTTYPE)
public class AppointmentType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.TYPE, unique = true, nullable = false)
    private String type;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Appointment> appointments;

    @Builder(builderMethodName = "appointmentTypeBuilder")
    public AppointmentType(Long id, String type, Set<Appointment>appointments) {
        this.id=id;
        this.type=type;
        this.appointments=appointments;
    }
}
