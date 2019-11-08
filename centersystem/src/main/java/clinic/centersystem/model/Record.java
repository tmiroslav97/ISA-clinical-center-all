package clinic.centersystem.model;

import java.util.ArrayList;

public class Record {
    private ArrayList<Medicine> medecines;
    private ArrayList<Diagnose> diagnoses;

    public Record() {
        // TODO: implement
    }

    public ArrayList<Medicine> getMedecines() {
        return medecines;
    }

    public void setMedecines(ArrayList<Medicine> newMedecines) {
        medecines = newMedecines;
    }

    public ArrayList<Diagnose> getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(ArrayList<Diagnose> newDiagnoses) {
        diagnoses = newDiagnoses;
    }

}