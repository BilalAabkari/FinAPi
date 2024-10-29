package com.mechanIQ.role.domain;

import java.util.List;
import java.util.Optional;

public interface RoleRepository
{
    Optional<Role> findById(Long id);
    Optional<Role> findByName(String name);
    void save(Role role);
    void delete(Role role);
    List<Role> findAll();

}
