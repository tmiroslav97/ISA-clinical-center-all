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
@Table(name = DbColumnConstants.REGISTRATIONREQUIREMENT)
public class RegistrationRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.FIRSTNAME, nullable = false)
    private String firstName;

    @Column(name = DbColumnConstants.LASTNAME, nullable = false)
    private String lastName;

    @Column(name = DbColumnConstants.EMAIL, nullable = false)
    private String email;

    @Column(name = DbColumnConstants.PASSWORD, nullable = false)
    private String password;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private ClinicCenter clinicCenter;

    public RegistrationRequirement() {
    }

}