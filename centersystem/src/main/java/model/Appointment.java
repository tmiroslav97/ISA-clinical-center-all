package model;

public class Appointment {
    private String type;
    private long duration;
    private long dateTime;
    private float price;
    private SurgExRoom surExRooms;
    private Patient patient;
    private Doctor doctor;

    public Appointment() {
        // TODO: implement
    }

    public String getType() {
        return type;
    }

    public void setType(String newType) {
        type = newType;
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

    public float getPrice() {
        return price;
    }

    public void setPrice(float newPrice) {
        price = newPrice;
    }

    public SurgExRoom getSurExRooms() {
        return surExRooms;
    }

    public void setSurExRooms(SurgExRoom newSurExRooms) {
        surExRooms = newSurExRooms;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient newPatient) {
        patient = newPatient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor newDoctor) {
        doctor = newDoctor;
    }

}