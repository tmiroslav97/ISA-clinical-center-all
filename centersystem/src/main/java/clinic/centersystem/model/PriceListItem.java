package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PriceListItem {

    private Long id;
    private String serviceName;
    private Float price;
    private PriceList priceList;

    public PriceListItem() {
        // TODO: implement
    }

}