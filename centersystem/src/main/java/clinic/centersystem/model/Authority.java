package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = DbTableConstants.AUTHORITY)
public class Authority implements GrantedAuthority {

    @Id
    @Column(name = DbColumnConstants.ID)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = DbColumnConstants.NAME)
    String name;

    @Override
    public String getAuthority() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonIgnore
    public String getName() {
        return name;
    }

    @JsonIgnore
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
