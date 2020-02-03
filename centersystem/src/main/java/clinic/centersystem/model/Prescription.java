package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.*;
import lombok.*;

import javax.persistence.*;

@Builder
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = DbTableConstants.PRESCRIPTION)
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.ISVALIDATE, nullable = false)
    private boolean isValidate = false;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Nurse nurse;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private Medicine medicine;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private MedicalReport medicalReport;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Clinic clinic;

}