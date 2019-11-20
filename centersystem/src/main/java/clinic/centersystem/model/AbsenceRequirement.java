package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = DbTableConstants.ABSENCEREQUIREMENT)
public class AbsenceRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.TYPE, unique = false, nullable = false)
    private String type;

    @Column(name = DbColumnConstants.STARTDATE, unique = false, nullable = false)
    private Long startDate;

    @Column(name = DbColumnConstants.ENDDATE, unique = false, nullable = false)
    private Long endDate;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Personnel personnel;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Clinic clinic;

    public AbsenceRequirement() {

    }
}
