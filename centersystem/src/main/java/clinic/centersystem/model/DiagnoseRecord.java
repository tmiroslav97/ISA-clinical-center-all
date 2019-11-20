package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = DbTableConstants.DIAGNOSERECORD)
public class DiagnoseRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Diagnose> diagnoses;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private ClinicCenter clinicCenter;

    public DiagnoseRecord() {

    }
}
