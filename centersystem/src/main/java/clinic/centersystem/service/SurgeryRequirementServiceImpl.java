package clinic.centersystem.service;

import clinic.centersystem.converter.SurgeryRequirementConverter;
import clinic.centersystem.dto.request.SurgeryReservationReqDTO;
import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.dto.response.SurgeryRequirementResponseDTO;
import clinic.centersystem.model.*;
import clinic.centersystem.repository.SurgeryRequirementRepository;
import clinic.centersystem.service.intf.DoctorService;
import clinic.centersystem.service.intf.RoomCalendarService;
import clinic.centersystem.service.intf.RoomService;
import clinic.centersystem.service.intf.SurgeryRequirementService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SurgeryRequirementServiceImpl implements SurgeryRequirementService {

    @Autowired
    private SurgeryRequirementRepository surgeryRequirementRepository;

    @Autowired
    private RoomService roomService;

    @Autowired
    private RoomCalendarService roomCalendarService;

    @Autowired
    private DoctorService doctorService;

    @Override
    public SurgeryRequirement findById(Long id) {
        return surgeryRequirementRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<SurgeryRequirement> findAll() {
        return surgeryRequirementRepository.findAll();
    }

    @Override
    public SurgeryRequirementResponseDTO findByClinicId(Long clinicId, Integer pageCnt) {
        Pageable pageable = PageRequest.of(pageCnt, 10);
        Page<SurgeryRequirement> surgeryRequirements = surgeryRequirementRepository.findByClinicId(clinicId, pageable);
        SurgeryRequirementResponseDTO surgeryRequirementResponseDTO = new SurgeryRequirementResponseDTO();

        surgeryRequirementResponseDTO.setSurgeryRequirements(surgeryRequirements.getContent().stream().map(SurgeryRequirementConverter::fromSurReqToSurReqDTO).collect(Collectors.toList()));
        surgeryRequirementResponseDTO.setPageCount(surgeryRequirements.getTotalPages());

        return surgeryRequirementResponseDTO;
    }

    @Override
    public String reserveRoomForSurgery(SurgeryReservationReqDTO surgeryReservationReqDTO) {
        String pickedDateStr = surgeryReservationReqDTO.getPickedTerm().split(" ")[0];
        String pickedTermStr = (surgeryReservationReqDTO.getPickedTerm().split(" ")[1]).substring(0, 0);
        DateTime pickedDate = new DateTime(pickedDateStr);
        Integer pickedTerm = Integer.valueOf(pickedTermStr);
        List<Integer> bookedTerm = roomCalendarService.findByRoomAndDate(surgeryReservationReqDTO.getPickedRoom(), pickedDate);

        if (bookedTerm.contains(pickedTerm)) {
            return "Room is unavailable for desired date and term";
        }

        boolean avDoctors = false;
        Doctor doctor = doctorService.findById(surgeryReservationReqDTO.getPickedSurReq().getDoctorId());



        Room room = roomService.findById(surgeryReservationReqDTO.getPickedRoom());

        return null;
    }


}
