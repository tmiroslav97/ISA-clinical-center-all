package clinic.centersystem.model;

import java.util.ArrayList;

public class MedicalReport {
    private String description;
    private ArrayList<Diagnose> diagnoses;
    private ArrayList<Perscription> perscriptions;


    public MedicalReport() {
        // TODO: implement
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String newDescription) {
        description = newDescription;
    }

    public ArrayList<Diagnose> getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(ArrayList<Diagnose> newDiagnoses) {
        diagnoses = newDiagnoses;
    }

    public ArrayList<Perscription> getPerscriptions() {
        return perscriptions;
    }

    public void setPerscriptions(ArrayList<Perscription> newPerscriptions) {
        perscriptions = newPerscriptions;
    }

}