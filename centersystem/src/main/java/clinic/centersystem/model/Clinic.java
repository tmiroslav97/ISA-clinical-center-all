package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class Clinic {

    private Long id;
    private String name;
    private String address;
    private String description;
    private Float rating;
    private BusinessReport busReport;
    private Set<Doctor> doctors;
    private Set<Nurse> nurses;
    private Set<ClinicAdmin> clinicAdmins;
    private Set<SurgExRoom> surExRooms;
    private Set<Appointment> appointments;
    private Set<HolidayReq> holReqs;


    public Clinic() {
        // TODO: implement
    }

}