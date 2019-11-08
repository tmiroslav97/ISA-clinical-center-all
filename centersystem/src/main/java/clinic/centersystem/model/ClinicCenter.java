package clinic.centersystem.model;

import java.util.ArrayList;

public class ClinicCenter {
    private String name;
    private ArrayList<RegReq> regReqs;
    private Record record;
    private ArrayList<ClinicCenterAdmin> ccAdmins;
    private ArrayList<Clinic> clinics;


    public ClinicCenter() {
        // TODO: implement
    }

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        name = newName;
    }

    public ArrayList<RegReq> getRegReqs() {
        return regReqs;
    }

    public void setRegReqs(ArrayList<RegReq> newRegReqs) {
        regReqs = newRegReqs;
    }

    public Record getRecord() {
        return record;
    }

    public void setRecord(Record newRecord) {
        record = newRecord;
    }

    public ArrayList<ClinicCenterAdmin> getCcAdmins() {
        return ccAdmins;
    }

    public void setCcAdmins(ArrayList<ClinicCenterAdmin> newCcAdmins) {
        ccAdmins = newCcAdmins;
    }

    public ArrayList<Clinic> getClinics() {
        return clinics;
    }

    public void setClinics(ArrayList<Clinic> newClinics) {
        clinics = newClinics;
    }

}