package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.joda.time.DateTime;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = DbTableConstants.SURGERY)
public class Surgery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DATETIME, nullable = false)
    @Temporal(TemporalType.DATE)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime", parameters = {
            @org.hibernate.annotations.Parameter(name = "databaseZone", value = "UTC"),
            @org.hibernate.annotations.Parameter(name = "javaZone", value = "UTC")
    })
    private DateTime dateTime;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Room room;

    @JsonBackReference
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Doctor> doctors;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Patient patient;

}