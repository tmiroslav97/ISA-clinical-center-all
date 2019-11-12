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
    private PriceList priceList;
    private Set<Doctor> doctors;
    private Set<Nurse> nurses;
    private Set<ClinicAdmin> clinicAdmins;
    private Set<SurgExRoom> surExRooms;
    private Set<Appointment> appointments;
    private Set<AbsenceRequirement> reqAbs;
    private Set<AppRequirement> appReqs;
    private Set<SurgeryRequirement> surReqs;
    private ClinicCenter clinicCenter;

    public Clinic() {
        // TODO: implement
    }

}