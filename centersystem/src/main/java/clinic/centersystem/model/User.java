package clinic.centersystem.model;


import clinic.centersystem.model.enumeration.RoleEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String lasName;
    @Column
    private String password;
    @Column
    private String email;
    @Column
    private RoleEnum role;

    public User() {
        // TODO: implement
    }

}