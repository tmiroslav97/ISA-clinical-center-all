package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.model.enumeration.RoleEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.userdetails.UserDetails;

import static javax.persistence.InheritanceType.JOINED;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;


@Setter
@Getter
@Entity
@Table(name = DbColumnConstants.USER)
@Inheritance(strategy = JOINED)
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = DbColumnConstants.ID, unique = true, nullable = false)
    private Long id;

    @Column(name = DbColumnConstants.FIRSTNAME, unique = false, nullable = false)
    private String firstName;

    @Column(name = DbColumnConstants.LASTNAME, unique = false, nullable = false)
    private String lastName;

    @Column(name = DbColumnConstants.PASSWORD, unique = false, nullable = false)
    private String password;

    @Column(name = DbColumnConstants.EMAIL, unique = true, nullable = false)
    private String email;

    @Column(name = "address", unique = false, nullable = false)
    private String address;

    @Column(name = "country", unique = false, nullable = false)
    private String country;

    @Column(name = "city", unique = false, nullable = false)
    private String city;

    @Column(name = "phoneNum", unique = false, nullable = false)
    private String phoneNum;

    @Column(name = DbColumnConstants.ROLE, unique = false, nullable = false)
    private RoleEnum role;

    @Column(name = "firstLog", unique = false, nullable = false)
    private boolean isFirstLog;

    @Column(name = "unoip", unique = false, nullable = false)
    private String unoip;

    @Column(name = "enabled", unique = false, nullable = false)
    private boolean enabled;

    @Column(name = "last_password_reset_date")
    private Timestamp lastPasswordResetDate;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_authority",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id"))
    private List<Authority> authorities;

    public User() {
        // TODO: implement
    }

    public String getUsername() {
        return this.email;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

}