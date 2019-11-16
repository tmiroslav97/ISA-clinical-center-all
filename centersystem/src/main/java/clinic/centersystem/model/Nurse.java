package clinic.centersystem.model;


import clinic.centersystem.common.db.DbColumnConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = DbColumnConstants.NURSE)
public class Nurse extends Personnel {

    public Nurse() {
        // TODO: implement
    }

}