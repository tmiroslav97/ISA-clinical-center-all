package clinic.centersystem.service;

import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.model.User;

import java.util.List;

public interface UserService {
    User findById(Long id);

    User findByEmail(String username);

    List<User> findAll();

    User save(RegistrationRequirement registrationRequirement);
}
