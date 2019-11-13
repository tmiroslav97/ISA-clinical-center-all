package clinic.centersystem.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "nurse")
public class Nurse extends Personnel {

    public Nurse() {
        // TODO: implement
    }

}