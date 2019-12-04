package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.*;

import javax.persistence.*;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = DbTableConstants.ABSENCEREQUIREMENT)
public class AbsenceRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.TYPE, unique = false, nullable = false)
    private String type;

    @Column(name = DbColumnConstants.STATUS, unique = false, nullable = false)
    private String status;

    @Column(name = DbColumnConstants.STARTDATE, unique = false, nullable = false)
    private Long startDate;

    @Column(name = DbColumnConstants.ENDDATE, unique = false, nullable = false)
    private Long endDate;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Personnel personnel;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Clinic clinic;

}
