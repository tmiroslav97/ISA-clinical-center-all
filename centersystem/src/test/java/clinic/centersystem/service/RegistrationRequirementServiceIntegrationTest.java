package clinic.centersystem.service;

import clinic.centersystem.exception.RegistrationRequirementNotFoundException;
import clinic.centersystem.exception.ResourceExistsException;
import clinic.centersystem.model.Authority;
import clinic.centersystem.model.MedicalRecord;
import clinic.centersystem.model.Patient;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.repository.RegistrationRequirementRepository;
import clinic.centersystem.service.intf.RegistrationRequirementService;
import org.junit.Test;
import org.junit.jupiter.api.Order;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@TestPropertySource("classpath:application-test.properties")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RegistrationRequirementServiceIntegrationTest {

    @Autowired
    private RegistrationRequirementService registrationRequirementService;

    @Autowired
    private RegistrationRequirementRepository registrationRequirementRepository;

    private static final Long USER_EXISTS_ID = 1L;
    private static final String USER_EXISTS_EMAIL = "tomic.miroslav97@gmail.com";
    private static final Long REG_REQ_EXISTS_USER = 4L;
    private static final Long REG_REQ_NOT_VALID = 15L;
    private static final Long REG_REQ_VALID = 1L;
    private static final String MESSAGE = "Not enough information";
    private static final Long REG_REQ_ID_VALID = 4L;
    private static final String ADDRESS_VALID = "Safarikova 31";
    private static final String CITY_VALID = "Bijeljina";
    private static final String COUNTRY_VALID = "Bosna";
    private static final String EMAIL_VALID = "tomic.miroslav97@gmail.com";
    private static final String FIRST_NAME_VALID = "Miki";
    private static final String LAST_NAME_VALID = "Peric";
    private static final String PASSWORD_VALID = "123";
    private static final String PASSWORD2_VALID = "123";
    private static final String PHONE_NUME_VALID = "065987654";
    private static final String UNOIP_VALID = "1234543";
    private static final Long VERSION_VALID = 0L;


    @Test(expected = ResourceExistsException.class)
    @Order(1)
    public void approveRegistrationRequestShouldThrowResourceExistsExceptionWhenUserExists() {
        registrationRequirementService.approveRegistrationRequest(REG_REQ_ID_VALID);

    }

    @Test(expected = ResourceExistsException.class)
    @Order(2)
    public void rejectRegistrationRequestShouldThrowResourceExistsExceptionWhenUserExists() {
        registrationRequirementService.rejectRegistrationRequest(REG_REQ_ID_VALID, MESSAGE);
    }


    @Test(expected = RegistrationRequirementNotFoundException.class)
    @Order(3)
    public void rejectRegistrationRequestShouldThrowRegistrationRequirementNotFoundExceptionWhenRegistrationRequirementNotExists() {
        registrationRequirementService.rejectRegistrationRequest(REG_REQ_NOT_VALID, MESSAGE);
    }

    @Test(expected = RegistrationRequirementNotFoundException.class)
    @Order(4)
    public void approveRegistrationRequestShouldThrowRegistrationRequirementNotFoundExceptionWhenRegistrationRequirementNotExists() {
        registrationRequirementService.approveRegistrationRequest(REG_REQ_NOT_VALID);
    }

    @Test
    @Order(5)
    public void approveRegistrationRequestShouldReturnSuccMsg() {
        int size = registrationRequirementRepository.findAll().size();

        String succcMsg = registrationRequirementService.approveRegistrationRequest(1L);
        assertEquals("Patient registration approved", succcMsg);

        assertEquals(size - 1, registrationRequirementRepository.findAll().size());
    }

    @Test
    @Order(6)
    public void rejectRegistrationRequestShouldReturnErrorMsg() {
        int flag = registrationRequirementService.rejectRegistrationRequest(3L, "");
        assertEquals(1, flag);
    }

    @Test
    @Order(7)
    public void rejectRegistrationRequestShouldReturnSuccMsg() {
        int size = registrationRequirementRepository.findAll().size();

        int flag = registrationRequirementService.rejectRegistrationRequest(2L, "Rejected");
        assertEquals(2, flag);
        assertEquals(size - 1, registrationRequirementRepository.findAll().size());
    }
}
