package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.model.enumeration.RoleEnum;
import lombok.Getter;
import lombok.Setter;

import static javax.persistence.InheritanceType.JOINED;

import javax.persistence.*;


@Setter
@Getter
@Entity
@Table(name = DbColumnConstants.USER)
@Inheritance(strategy = JOINED)
public class User {

    @Id
    @GeneratedValue
    @Column(name = DbColumnConstants.ID, unique = true, nullable = false)
    private Long id;

    @Column(name = DbColumnConstants.FIRSTNAME, unique = false, nullable = false)
    private String firstName;

    @Column(name = DbColumnConstants.LASTNAME, unique = false, nullable = false)
    private String lastName;

    @Column(name = DbColumnConstants.PASSWORD, unique = true, nullable = false)
    private String password;

    @Column(name = DbColumnConstants.EMAIL, unique = true, nullable = false)
    private String email;

    @Column(name = DbColumnConstants.ROLE, unique = false, nullable = false)
    private RoleEnum role;

    public User() {
        // TODO: implement
    }

}