package clinic.centersystem.model;

import java.util.ArrayList;

public class PriceList {
    private String name;
    private ArrayList<Item> items;

    public PriceList() {
        // TODO: implement
    }

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        name = newName;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> newItems) {
        items = newItems;
    }

}