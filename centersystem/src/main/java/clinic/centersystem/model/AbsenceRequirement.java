package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "absenceRequirement")
public class AbsenceRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type", unique = false, nullable = false)
    private String type;

    @Column(name = "startDate", unique = false, nullable = false)
    private Long startDate;

    @Column(name = "endDate", unique = false, nullable = false)
    private Long endDate;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Personnel personnel;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Clinic clinic;

    public AbsenceRequirement() {

    }
}
