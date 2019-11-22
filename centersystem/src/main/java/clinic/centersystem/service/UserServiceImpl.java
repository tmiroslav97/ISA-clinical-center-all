package clinic.centersystem.service;

import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.Authority;
import clinic.centersystem.model.User;
import clinic.centersystem.model.enumeration.RoleEnum;
import clinic.centersystem.repository.UserRepository;
import clinic.centersystem.service.intf.AuthorityService;
import clinic.centersystem.service.intf.UserService;
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
    public User save() {
        return null;
    }
}
