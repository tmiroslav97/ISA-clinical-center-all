package clinic.centersystem.dto.request;

import clinic.centersystem.dto.response.SurgeryRequirementDateResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SurgeryReservationReqDTO {

    private SurgeryRequirementDateResponseDTO pickedSurReq;

    private String pickedTerm;

    private Long pickedRoom;

    private List<Integer> chosenDoc;
}
