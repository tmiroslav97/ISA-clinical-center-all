package clinic.centersystem.controller;


import clinic.centersystem.authentication.JwtAuthenticationRequest;
import clinic.centersystem.dto.response.LoginUserResponse;
import clinic.centersystem.service.intf.RegistrationRequirementService;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@TestPropertySource("classpath:application-test.properties")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RegistrationRequirementControllerIntegrationTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private RegistrationRequirementService registrationRequirementService;

    private String accessToken;
    private static final String APPROVE_ENDPOINT_USER_EXISTS = "/reg/approve/1";
    private static final String REJECT_ENDPOINT_USER_EXISTS = "/reg/reject/1/Not enough information";
    private static final String APPROVE_EDNPOINT_REG_REQ_NOT_EXISTS = "/reg/approve/50";
    private static final String REJECT_EDNPOINT_REG_REQ_NOT_EXISTS = "/reg/reject/50/Not enough information";
    private static final String APPROVE_ENDPOINT_USER_NOT_EXISTS = "/reg/approve/1";
    private static final String REJECT_ENDPOINT_USER_NOT_EXISTS = "/reg/reject/1/Not enough information";
    private static final String REJECT_ENDPOINT_MESSAGE_MISSING = "/reg/reject/1/ ";
    private static final String MESSAGE = "Not enough information";
    private static final String MESSAGE_EMPTY = "";
    private static final Long VALID_ID = 1L;
    private static final Long USER_EXISTS_ID = 1L;
    private static final Long NOT_VALID_ID = 50L;

    @Before
    public void login() {
        ResponseEntity<LoginUserResponse> responseEntity = testRestTemplate.postForEntity("/sec/login", new JwtAuthenticationRequest("tomic.miroslav97@gmail.com", "123"), LoginUserResponse.class);
        accessToken = "Bearer " + responseEntity.getBody().getToken();
    }

}
