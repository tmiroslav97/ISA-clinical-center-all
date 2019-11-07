package model;

import java.util.ArrayList;

public class MedicalRecord {
    private String description;
    private ArrayList<MedicalReport> records;

    public MedicalRecord() {
        // TODO: implement
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String newDescription) {
        description = newDescription;
    }

    public ArrayList<MedicalReport> getRecords() {
        return records;
    }

    public void setRecords(ArrayList<MedicalReport> newRecords) {
        records = newRecords;
    }

}