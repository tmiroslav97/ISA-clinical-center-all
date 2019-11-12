package clinic.centersystem.model;


import java.util.Set;

public class MedicalRecord {

    private Long id;
    private Set<MedicalReport> diseaseHistory;
    private String description;

    public MedicalRecord() {
        // TODO: implement
    }

}