package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
public class MedicalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<MedicalReport> diseaseHistory;

    @Column(name = "description", unique = false, nullable = false)
    private String description;

    public MedicalRecord() {
        // TODO: implement
    }

}