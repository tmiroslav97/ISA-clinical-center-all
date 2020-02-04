package clinic.centersystem.service;

import clinic.centersystem.converter.AbsenceRequirementConverter;
import clinic.centersystem.dto.request.AbsenceRequirementDTO;
import clinic.centersystem.model.AbsenceHolidayRequirement;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.model.Personnel;
import clinic.centersystem.repository.AbsenceHolidayRequirementRepository;
import clinic.centersystem.service.intf.AbsenceHolidayRequirementService;
import clinic.centersystem.service.intf.ClinicService;
import clinic.centersystem.service.intf.PersonnelService;
import org.jadira.usertype.dateandtime.joda.PersistentDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbsenceHolidayRequirementServiceImpl implements AbsenceHolidayRequirementService {

    @Autowired
    private AbsenceHolidayRequirementRepository absenceHolidayRequirementRepository;

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private PersonnelService personnelService;

    @Override
    public AbsenceHolidayRequirement findById(Long id) {
        return this.absenceHolidayRequirementRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<AbsenceHolidayRequirement> findAll() {
        return this.absenceHolidayRequirementRepository.findAll();
    }

    @Override
    public List<AbsenceHolidayRequirement> findAllByPersonnelId(Long id) {
        return absenceHolidayRequirementRepository.findAllByPersonnelId(id);
    }

    @Override
    public AbsenceHolidayRequirement save(AbsenceHolidayRequirement absenceHolidayRequirement) {
        return this.absenceHolidayRequirementRepository.save(absenceHolidayRequirement);
    }

    @Override
    public String submitAbsenceRequirement(AbsenceRequirementDTO absenceRequirementDTO) {
        AbsenceHolidayRequirement absenceHolidayRequirement = AbsenceRequirementConverter.toCreateAbsenceRequirementFromAbsenceRequest(absenceRequirementDTO);
        Personnel personnel = personnelService.findById(absenceRequirementDTO.getPersonnelId());
        Clinic clinic = clinicService.findById(absenceRequirementDTO.getClinicId());

        absenceHolidayRequirement.setClinic(clinic);
        absenceHolidayRequirement.setPersonnel(personnel);
        clinic.getReqAbs().add(absenceHolidayRequirement);
        personnel.getAbsenceHolidayRequirements().add(absenceHolidayRequirement);
        absenceHolidayRequirement = this.save(absenceHolidayRequirement);
        clinic = clinicService.saveClinic(clinic);
        personnel = personnelService.save(personnel);

        return "Successfully created absence requirement";
    }
}
