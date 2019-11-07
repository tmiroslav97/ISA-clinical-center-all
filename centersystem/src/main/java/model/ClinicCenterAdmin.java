package model;

public class ClinicCenterAdmin extends User {
    private Boolean predefined;

    public ClinicCenterAdmin() {
        // TODO: implement
    }

    public Boolean getPredefined() {
        return predefined;
    }

    public void setPredefined(Boolean newPredefined) {
        predefined = newPredefined;
    }

}