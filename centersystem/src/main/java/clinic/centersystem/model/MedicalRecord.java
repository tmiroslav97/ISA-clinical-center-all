package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = DbTableConstants.MEDICALRECORD)
public class MedicalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DESCRIPTION, nullable = false)
    private String description;

    @Column(name = DbColumnConstants.HEIGHT)
    private Float height;

    @Column(name = DbColumnConstants.WEIGHT)
    private Float weight;

    @Column(name = DbColumnConstants.BLOODTYPE)
    private String bloodType;

    @JsonBackReference
    @OneToOne( fetch = FetchType.LAZY)
    private Patient patient;

    @JsonBackReference
    @OneToMany(mappedBy = "medicalRecord", fetch = FetchType.LAZY)
    private Set<MedicalReport> diseaseHistory;

}