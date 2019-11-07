package model;

import java.util.ArrayList;

public class Surgery {
    private long duration;
    private long dateTime;
    private SurgExRoom surgExRooms;
    private ArrayList<Doctor> doctors;
    private Patient patient;

    public Surgery() {
        // TODO: implement
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long newDuration) {
        duration = newDuration;
    }

    public long getDateTime() {
        return dateTime;
    }

    public void setDateTime(long newDateTime) {
        dateTime = newDateTime;
    }

    public SurgExRoom getSurgExRooms() {
        return surgExRooms;
    }

    public void setSurgExRooms(SurgExRoom newSurgExRooms) {
        surgExRooms = newSurgExRooms;
    }

    public ArrayList<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(ArrayList<Doctor> newDoctors) {
        doctors = newDoctors;
    }

}