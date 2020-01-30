package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = DbTableConstants.MEDICALREPORT)
public class MedicalReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DESCRIPTION, nullable = false)
    private String description;

    @OneToMany(mappedBy = "medicalReport", fetch = FetchType.LAZY)
    private Set<Prescription> prescriptions;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Appointment appointment;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MedicalRecord medicalRecord;

}