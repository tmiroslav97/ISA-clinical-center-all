package model;

import java.util.ArrayList;

public class Clinic {

    private String name;
    private String address;
    private String description;
    private float rating;
    private BusinessReport busReport;
    private ArrayList<Doctor> doctors;
    private ArrayList<Nurse> nurses;
    private ArrayList<ClinicAdmin> clinicAdmins;
    private ArrayList<SurgExRoom> surExRooms;
    private ArrayList<Appointment> appointments;
    private ArrayList<HolidayReq> holReqs;


    public Clinic() {
        // TODO: implement
    }

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        name = newName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String newAddress) {
        address = newAddress;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String newDescription) {
        description = newDescription;
    }

    public float getRating() {
        return rating;
    }


    public void setRating(float newRating) {
        rating = newRating;
    }


    public BusinessReport getBusReport() {
        return busReport;
    }

    public void setBusReport(BusinessReport newBusReport) {
        busReport = newBusReport;
    }


    public ArrayList<Doctor> getDoctors() {
        return doctors;
    }


    public void setDoctors(ArrayList<Doctor> newDoctors) {
        doctors = newDoctors;
    }


    public ArrayList<Nurse> getNurses() {
        return nurses;
    }


    public void setNurses(ArrayList<Nurse> newNurses) {
        nurses = newNurses;
    }


    public ArrayList<ClinicAdmin> getClinicAdmins() {
        return clinicAdmins;
    }

    public void setClinicAdmins(ArrayList<ClinicAdmin> newClinicAdmins) {
        clinicAdmins = newClinicAdmins;
    }


    public ArrayList<SurgExRoom> getSurExRooms() {
        return surExRooms;
    }


    public void setSurExRooms(ArrayList<SurgExRoom> newSurExRooms) {
        surExRooms = newSurExRooms;
    }


    public ArrayList<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(ArrayList<Appointment> newAppointments) {
        appointments = newAppointments;
    }


    public ArrayList<HolidayReq> getHolReqs() {
        return holReqs;
    }

    public void setHolReqs(ArrayList<HolidayReq> newHolReqs) {
        holReqs = newHolReqs;
    }

}