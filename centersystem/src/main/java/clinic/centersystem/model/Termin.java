package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = DbTableConstants.TERMIN)
public class Termin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.HOUR, nullable = false, unique = true)
    private Integer hour;

    @JsonBackReference
    @ManyToMany(mappedBy = "usedTermins", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<RoomCalendar> roomCalendar;
}
