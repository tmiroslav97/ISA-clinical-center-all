package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "price_list_item")
public class PriceListItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "serviceName", nullable = false)
    private String serviceName;

    @Column(name = "price", nullable = false)
    private Float price;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private PriceList priceList;

    public PriceListItem() {
        // TODO: implement
    }

}