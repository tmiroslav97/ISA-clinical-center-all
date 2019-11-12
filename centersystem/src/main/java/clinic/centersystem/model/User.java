package clinic.centersystem.model;


import clinic.centersystem.model.enumeration.RoleEnum;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class User {

    private Long id;
    private String name;
    private String lasName;
    private String password;
    private String email;
    private RoleEnum role;

    public User() {
        // TODO: implement
    }

}