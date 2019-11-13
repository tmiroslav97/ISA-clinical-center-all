package clinic.centersystem.model;


import clinic.centersystem.model.enumeration.RoleEnum;
import lombok.Getter;
import lombok.Setter;

import static javax.persistence.InheritanceType.JOINED;

import javax.persistence.*;


@Setter
@Getter
@Entity
@Table(name = "user")
@Inheritance(strategy = JOINED)
public class User {

    @Id
    @GeneratedValue
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "name", unique = false, nullable = false)
    private String name;

    @Column(name = "lastName", unique = false, nullable = false)
    private String lastName;

    @Column(name = "password", unique = true, nullable = false)
    private String password;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "role", unique = false, nullable = false)
    private RoleEnum role;

    public User() {
        // TODO: implement
    }

}