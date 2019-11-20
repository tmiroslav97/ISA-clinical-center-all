package clinic.centersystem.service;

import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.model.User;

import java.util.List;

public interface UserService {
    User findById(Long id);

    User findByUsername(String email);

    List<User> findAll();

    User save(RegistrationRequirement registrationRequirement);
}
