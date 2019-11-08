package clinic.centersystem.model;

public class Item {
    private String service;
    private float price;

    public Item() {
        // TODO: implement
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float newPrice) {
        price = newPrice;
    }

    public String getService() {
        return service;
    }

    public void setService(String newService) {
        service = newService;
    }

}