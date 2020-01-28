package clinic.centersystem.service.intf;

import clinic.centersystem.dto.request.SurgeryReservationReqDTO;
import clinic.centersystem.dto.response.SurgeryRequirementResponseDTO;
import clinic.centersystem.model.SurgeryRequirement;

import java.util.List;

public interface SurgeryRequirementService {

    SurgeryRequirement findById(Long id);

    List<SurgeryRequirement> findAll();

    SurgeryRequirementResponseDTO findByClinicId(Long clinicId, Integer pageCnt);

    String reserveRoomForSurgery(SurgeryReservationReqDTO surgeryReservationReqDTO);

}
