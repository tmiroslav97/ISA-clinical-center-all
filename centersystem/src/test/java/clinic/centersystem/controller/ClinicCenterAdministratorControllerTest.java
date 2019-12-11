package clinic.centersystem.controller;


import clinic.centersystem.dto.request.CCARegReqDTO;
import clinic.centersystem.exception.UserNotFoundException;
import clinic.centersystem.service.ClinicCenterAdministratorService;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ClinicCenterAdministratorControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @MockBean
    private ClinicCenterAdministratorService clinicCenterAdministratorServiceMock;

    private static final String REG_CA_ENDPOINT = "/cca/reg-cca/2";
    private static final Long ADMIN_ID = Long.valueOf(2);
    private static final CCARegReqDTO ccaRegReqDTO = new CCARegReqDTO("Mirosalv","Tomic","tomic@gmail.com","123");

    public void registerCCAShouldReturnNotFoundWhenUserNotFoundExceptionIsThrown(){
        when(clinicCenterAdministratorServiceMock.registerCCA(ccaRegReqDTO, ADMIN_ID)).thenThrow(UserNotFoundException.class);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(REG_CA_ENDPOINT, ccaRegReqDTO, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is NOT_FOUND.", HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertNull("Response does not contain body.", success);
    }
}
