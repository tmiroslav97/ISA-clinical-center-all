package model;

import java.util.ArrayList;

public class Nurse extends User {
    private ArrayList<HolidayReq> holReq;
    private ArrayList<Perscription> perscriptions;


    public Celandar calendar;

    public Nurse() {
        // TODO: implement
    }

    public Celandar getCalendar() {
        return calendar;
    }

    public void setCalendar(Celandar newCalendar) {
        calendar = newCalendar;
    }

}