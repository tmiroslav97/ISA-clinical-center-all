package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = DbColumnConstants.PERSCRIPTIONRECORD)
public class PerscriptionRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Medecine> medecines;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private ClinicCenter clinicCenter;

    public PerscriptionRecord() {

    }
}
