package clinic.centersystem.model;

public class BusinessReport {
    private float clinicRating;
    private float doctorRating;
    private int graphic;
    private float income;

    public BusinessReport() {
        // TODO: implement
    }

    public float getClinicRating() {
        return clinicRating;
    }

    public void setClinicRating(float newClinicRating) {
        clinicRating = newClinicRating;
    }

    public float getDoctorRating() {
        return doctorRating;
    }

    public void setDoctorRating(float newDoctorRating) {
        doctorRating = newDoctorRating;
    }

    public int getGraphic() {
        return graphic;
    }

    public void setGraphic(int newGraphic) {
        graphic = newGraphic;
    }

    public float getIncome() {
        return income;
    }

    public void setIncome(float newIncome) {
        income = newIncome;
    }

}