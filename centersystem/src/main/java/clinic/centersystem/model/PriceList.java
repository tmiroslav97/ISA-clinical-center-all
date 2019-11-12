package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class PriceList {

    private Long id;
    private Set<PriceListItem> items;
    private Clinic clinic;

    public PriceList() {
        // TODO: implement
    }

}