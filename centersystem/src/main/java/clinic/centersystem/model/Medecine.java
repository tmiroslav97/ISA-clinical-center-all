package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = DbColumnConstants.MEDECINE)
public class Medecine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, unique = false, nullable = false)
    private String name;

    @Column(name = DbColumnConstants.DESCRIPTION, unique = true, nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private PerscriptionRecord perscriptionRecord;

    public Medecine() {
        // TODO: implement
    }

}