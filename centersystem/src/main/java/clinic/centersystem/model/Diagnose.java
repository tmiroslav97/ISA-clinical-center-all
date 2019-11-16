package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = DbColumnConstants.DIAGNOSE)
public class Diagnose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, unique = false, nullable = false)
    private String name;

    @Column(name = DbColumnConstants.DESCRIPTION, unique = false, nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private DiagnoseRecord diagnoseRecord;

    public Diagnose() {
        // TODO: implement
    }

}