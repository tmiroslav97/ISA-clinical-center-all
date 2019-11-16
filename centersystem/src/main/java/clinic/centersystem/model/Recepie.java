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
@Table(name = DbColumnConstants.RECEPIE)
public class Recepie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Nurse nurse;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Medecine medecine;

    @Column(name = DbColumnConstants.ISVALIDATE, unique = false, nullable = true)
    private boolean isValidate;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private MedicalReport medicalReport;

    public Recepie() {
        // TODO: implement
    }


}