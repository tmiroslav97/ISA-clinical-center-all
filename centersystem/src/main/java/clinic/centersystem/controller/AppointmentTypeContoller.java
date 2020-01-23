package clinic.centersystem.controller;

import clinic.centersystem.dto.request.AppointmentTypeRequestDTO;
import clinic.centersystem.model.AppointmentType;
import clinic.centersystem.service.AppointmentTypeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/appointment-type")
public class AppointmentTypeContoller {
    private final AppointmentTypeServiceImpl appointmentTypeService;

    public AppointmentTypeContoller(AppointmentTypeServiceImpl appointmentTypeService) {
        this.appointmentTypeService = appointmentTypeService;
    }

    @RequestMapping(method = GET, value = "/all")
    public ResponseEntity<List<AppointmentType>> getAppointmentType() {
        return new ResponseEntity<>(this.appointmentTypeService.getAppointmentType(), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value="/add-appointment-type")
    public ResponseEntity<String>addAppointmentType(@RequestBody AppointmentTypeRequestDTO appointmentTypeRequestDTO){
        return new ResponseEntity<>(this.appointmentTypeService.addAppointmentType(appointmentTypeRequestDTO), HttpStatus.OK);
    }
}
