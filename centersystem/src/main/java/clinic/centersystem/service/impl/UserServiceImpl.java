package clinic.centersystem.service.impl;

import clinic.centersystem.model.Authority;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.model.User;
import clinic.centersystem.model.enumeration.RoleEnum;
import clinic.centersystem.repository.UserRepository;
import clinic.centersystem.service.AuthorityService;
import clinic.centersystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthorityService authorityService;

    @Override
    public User findByUsername(String email) throws UsernameNotFoundException {
        User u = userRepository.findByEmail(email);
        return u;
    }

    @Override
    public User findById(Long id) throws AccessDeniedException {
        User u = userRepository.findById(id).orElseGet(null);
        return u;
    }

    @Override
    public List<User> findAll() throws AccessDeniedException {
        List<User> result = userRepository.findAll();
        return result;
    }

    @Override
    public User save(RegistrationRequirement registrationRequirement) {

        User u = new User();
        u.setEmail(registrationRequirement.getEmail());
        u.setPassword(passwordEncoder.encode(registrationRequirement.getPassword()));
        u.setFirstName(registrationRequirement.getFirstName());
        u.setLastName(registrationRequirement.getLastName());
        u.setAddress(registrationRequirement.getAddress());
        u.setCountry(registrationRequirement.getCountry());
        u.setCity(registrationRequirement.getCity());
        u.setPhoneNum(registrationRequirement.getPhoneNum());
        u.setUnoip(registrationRequirement.getUnoip());
        u.setRole(RoleEnum.ROLE_PATIENT);
        u.setEnabled(false);
        u.setFirstLog(true);

        List<Authority> auth = authorityService.findByName("ROLE_USER");
        u.setAuthorities(auth);

        u = this.userRepository.save(u);

        return u;
    }
}
