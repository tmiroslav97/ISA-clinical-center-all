package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = DbTableConstants.ABSENCEREQUIREMENT)
public class AbsenceHolidayRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.TYPE,nullable = false)
    private String type;

    @Column(name = DbColumnConstants.STATUS, nullable = false)
    private String status;

    @Column(name = DbColumnConstants.STARTDATE,nullable = false)
    private Long startDate;

    @Column(name = DbColumnConstants.ENDDATE, nullable = false)
    private Long endDate;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Personnel personnel;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Clinic clinic;

}
