package model;

import java.util.ArrayList;

public class Doctor extends User {
    private float rating;
    private Celandar calendar;
    private ArrayList<HolidayReq> holReq;


    public Doctor() {
        // TODO: implement
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float newRating) {
        rating = newRating;
    }

    public Celandar getCalendar() {
        return calendar;
    }

    public void setCalendar(Celandar newCalendar) {
        calendar = newCalendar;
    }

    public ArrayList getHolReq() {
        return holReq;
    }

    public void setHolReq(ArrayList<HolidayReq> holReq) {
        this.holReq = holReq;
    }
}