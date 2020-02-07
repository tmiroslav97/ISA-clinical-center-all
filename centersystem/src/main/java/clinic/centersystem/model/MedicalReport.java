package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
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

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    private Appointment appointment;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private MedicalRecord medicalRecord;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Diagnose diagnose;

    @JsonBackReference
    @Builder.Default
    @OneToMany(mappedBy = "medicalReport", fetch = FetchType.LAZY)
    private Set<Prescription> prescriptions = new HashSet<>();

}