package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
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
@Table(name = DbTableConstants.USER)
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

    @Column(name = DbColumnConstants.ADDRESS, unique = false, nullable = false)
    private String address;

    @Column(name = DbColumnConstants.COUNTRY, unique = false, nullable = false)
    private String country;

    @Column(name = DbColumnConstants.CITY, unique = false, nullable = false)
    private String city;

    @Column(name = DbColumnConstants.PHONENUM, unique = false, nullable = false)
    private String phoneNum;

    @Column(name = DbColumnConstants.ROLE, unique = false, nullable = false)
    @Enumerated(EnumType.STRING)
    private RoleEnum role;

    @Column(name = DbColumnConstants.FIRSTLOG, unique = false, nullable = false)
    private boolean isFirstLog;

    @Column(name = DbColumnConstants.UNOIP, unique = false, nullable = false)
    private String unoip;

    @Column(name = DbColumnConstants.ENABLED, unique = false, nullable = false)
    private boolean enabled;

    @Column(name = DbColumnConstants.LASTPASSWORDRESETDATE)
    private Timestamp lastPasswordResetDate;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = DbColumnConstants.USERAUTHORITY,
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
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

}