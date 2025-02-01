package com.mechanIQ.role.adapter;

import com.mechanIQ.role.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepositoryJPA extends JpaRepository<Role, Long> {

    Optional<Role> findByName(String name);
}
