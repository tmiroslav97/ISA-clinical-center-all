package clinic.centersystem.service;

import clinic.centersystem.model.Authority;

import java.util.List;

public interface AuthorityService {
    List<Authority> findById(Long id);

    List<Authority> findByName(String name);
}
