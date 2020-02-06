package clinic.centersystem.controller;


import clinic.centersystem.authentication.JwtAuthenticationRequest;
import clinic.centersystem.dto.response.LoginUserResponse;
import clinic.centersystem.exception.RegistrationRequirementNotFoundException;
import clinic.centersystem.exception.ResourceExistsException;
import clinic.centersystem.service.RegistrationRequirementServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.PostConstruct;


import java.net.URI;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@TestPropertySource("classpath:application-test.properties")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class RegistrationRequirementControllerUnitTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @MockBean
    private RegistrationRequirementServiceImpl registrationRequirementServiceMock;

    private String accessToken;
    private static final String APPROVE_ENDPOINT_USER_EXISTS = "/reg/approve/1";
    private static final String REJECT_ENDPOINT_USER_EXISTS = "/reg/reject/1/Nout enough information";
    private static final String APPROVE_EDNPOINT_REG_REQ_NOT_EXISTS = "/reg/approve/50";
    private static final String REJECT_EDNPOINT_REG_REQ_NOT_EXISTS = "/reg/reject/50/Nout enough information";
    private static final String APPROVE_ENDPOINT_USER_NOT_EXISTS = "/reg/approve/1";
    private static final String REJECT_ENDPOINT_USER_NOT_EXISTS = "/reg/reject/1/Not enough information";
    private static final String REJECT_ENDPOINT_MESSAGE_MISSING = "/reg/reject/4/ ";

    @PostConstruct
    public void login() {
        ResponseEntity<LoginUserResponse> responseEntity = testRestTemplate.postForEntity("/sec/login", new JwtAuthenticationRequest("tomic.miroslav97@gmail.com", "123"), LoginUserResponse.class);
        accessToken = "Bearer " + responseEntity.getBody().getToken();
    }

    @Test
    public void rejectRegistrationRequestShouldReturnOKWhenRegistrationRequirementNotFoundExceptionIsThrown() {
        when(registrationRequirementServiceMock.rejectRegistrationRequest(Long.valueOf(50), "Nout enough information")).thenThrow(RegistrationRequirementNotFoundException.class);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<Object> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(REJECT_EDNPOINT_REG_REQ_NOT_EXISTS, request, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is NOT_FOUND.", HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertNull("Response does not contain body.", success);
    }


    @Test
    public void approveRegistrationRequestShouldReturnNotFoundWhenRegistrationRequirementNotFoundExceptionIsThrown() {
        when(registrationRequirementServiceMock.approveRegistrationRequest(Long.valueOf(50))).thenThrow(RegistrationRequirementNotFoundException.class);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<Object> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(APPROVE_EDNPOINT_REG_REQ_NOT_EXISTS, request, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is NOT_FOUND.", HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertNull("Response does not contain body.", success);
    }

    @Test
    public void rejectRegistrationRequestShouldReturnBadRequestWhenResourceExistsExceptionIsThrown() {
        when(registrationRequirementServiceMock.rejectRegistrationRequest(Long.valueOf(1), "Nout enough information")).thenThrow(ResourceExistsException.class);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<Object> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(REJECT_ENDPOINT_USER_EXISTS, request, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is BAD_REQUEST.", HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertNull("Response does not contain body.", success);
    }

    @Test
    public void approveRegistrationRequestShouldReturnBadRequestWhenResourceExistsExceptionIsThrown() {
        when(registrationRequirementServiceMock.approveRegistrationRequest(Long.valueOf(1))).thenThrow(ResourceExistsException.class);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<Object> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(APPROVE_ENDPOINT_USER_EXISTS, request, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is BAD_REQUEST.", HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertNull("Response does not contain body.", success);
    }

    @Test
    public void approveRegistrationRequestShouldReturnOKAndSuccMsgWhenRegistrationRequirementIsApproved() {
        when(registrationRequirementServiceMock.approveRegistrationRequest(Long.valueOf(1))).thenReturn("Patient registration approved");

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<Object> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(APPROVE_ENDPOINT_USER_NOT_EXISTS, request, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is OK.", HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Patient registration approved", success);
    }

    @Test
    public void rejectRegistrationRequestShouldReturnOKAndSuccMsgWhenRegistrationRequirementIsRejected() {
        when(registrationRequirementServiceMock.rejectRegistrationRequest(Long.valueOf(1), "Not enough information")).thenReturn(5);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<Object> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(REJECT_ENDPOINT_USER_NOT_EXISTS, request, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is OK.", HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Patient registration rejected", success);
    }

    @Test
    public void rejectRegistrationRequestShouldReturnBadRequestAndErrMsgWhenRegistrationRequirementMissMesage() {
        when(registrationRequirementServiceMock.rejectRegistrationRequest(Long.valueOf(1), "")).thenReturn(1);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<Object> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(REJECT_ENDPOINT_MESSAGE_MISSING, request, String.class);

        String success = responseEntity.getBody();
        assertEquals("Http status is BAD_REQUEST.", HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Missing message", success);
    }

}
