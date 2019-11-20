package clinic.centersystem.controller;

import clinic.centersystem.authentication.JwtAuthenticationRequest;
import clinic.centersystem.dto.response.LoginUserResponse;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.model.User;
import clinic.centersystem.security.TokenUtils;
import clinic.centersystem.service.UserService;
import clinic.centersystem.service.impl.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/sec", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest,
                                                       HttpServletResponse response) throws AuthenticationException, IOException {

        final Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = (User) authentication.getPrincipal();
        String jwt = tokenUtils.generateToken(user.getEmail());

        LoginUserResponse loginUserResponse = LoginUserResponse.builder().city(user.getCity())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      .userID(user.getId()).email(user.getEmail()).token(jwt).firstName(user.getFirstName()).lastName(user.getLastName()).role(user.getRole().name()).country(user.getCountry()).phoneNumber(user.getPhoneNum()).isNotFirstLogin(user.isFirstLog()).build();
        return new ResponseEntity<>(loginUserResponse, HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/registration")
    public ResponseEntity<?> addUser(@RequestBody RegistrationRequirement userRequest, UriComponentsBuilder ucBuilder) {
        User existUser = this.userService.findByUsername(userRequest.getEmail());
        if (existUser != null) {
            return new ResponseEntity<>("Korisnik je vec registrovan!", HttpStatus.CREATED);
        }

        User user = this.userService.save(userRequest);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<>("Uspjesno ste se registrovali sacekajte email za potvrdu!", HttpStatus.CREATED);
    }

}
