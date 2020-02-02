package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = DbTableConstants.ROOM)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, nullable = false)
    private String name;

    @Column(name = DbColumnConstants.ROOMTYPE, nullable = false)
    private String type;

    @Column(name = DbColumnConstants.ROOMNUMBER, nullable = false, unique = true)
    private Integer roomNum;

    @Column(name = DbColumnConstants.RESERVED, nullable = false)
    private Boolean reserved = false;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Clinic clinic;

    @JsonBackReference
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<RoomCalendar> roomCalendars = new HashSet<>();

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<Surgery> surgeries = new HashSet<>();

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<Appointment> appointments = new HashSet<>();

}