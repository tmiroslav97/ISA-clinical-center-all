package clinic.centersystem.service;

import clinic.centersystem.converter.SurgeryRequirementConverter;
import clinic.centersystem.dto.request.SurgeryReservationReqDTO;
import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.dto.response.SurgeryRequirementResponseDTO;
import clinic.centersystem.model.*;
import clinic.centersystem.repository.SurgeryRequirementRepository;
import clinic.centersystem.service.intf.*;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
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

    @Autowired
    private CalendarService calendarService;

    @Autowired
    private CalendarItemService calendarItemService;

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
        String pickedTermsStr[] = (surgeryReservationReqDTO.getPickedTerm().split(" ")[1]).split("-");
        Integer pickedTermStart = Integer.valueOf(pickedTermsStr[0]);
        Integer pickedTermEnd = Integer.valueOf(pickedTermsStr[1]);
        DateTime pickedDate = new DateTime(pickedDateStr, DateTimeZone.UTC);

        DateTime pickedDateStart = new DateTime(pickedDateStr, DateTimeZone.UTC);
        pickedDateStart = pickedDateStart.plusHours(pickedTermStart);

        DateTime pickedDateEnd = new DateTime(pickedDateStr, DateTimeZone.UTC);
        pickedDateEnd = pickedDateEnd.plusHours(pickedTermEnd);

        List<Integer> bookedTerm = roomCalendarService.findByRoomAndDate(surgeryReservationReqDTO.getPickedRoom(), pickedDate);

        if (bookedTerm.contains(pickedTermStart)) {
            return "Room is unavailable for desired date and term";
        }

        surgeryReservationReqDTO.getChosenDoc().add(surgeryReservationReqDTO.getPickedSurReq().getDoctorId());
        boolean avDoctors = false;
        Doctor doctor;
        Long calendarId;
        Integer cntCi;
        for (Long docId : surgeryReservationReqDTO.getChosenDoc()) {
            doctor = doctorService.findById(Long.valueOf(docId));

            if (doctor.getStartTime() <= pickedTermStart && pickedTermEnd <= doctor.getEndTime()) {
                //doktor ne moze da prisustvuje operaciji jer operacija nije u sklopu radnog vremena
                continue;
            }
            calendarId = calendarService.findCalendarIdByPersonnelId(doctor.getId());
            cntCi = calendarItemService.findByCalendarIdandDate(calendarId, pickedDateStart, pickedDateEnd);
            if (cntCi == 0) {
                avDoctors = true;
                //doktor ima slobodnih termina unjeti mu u kalendar sto treba
            }
        }

        if (!avDoctors) {
            return "There are no available doctors for this surgery";
        }

        Room room = roomService.findById(surgeryReservationReqDTO.getPickedRoom());

        return null;
    }


}
