package com.mechanIQ.role.adapter;

import com.mechanIQ.role.domain.Role;
import com.mechanIQ.role.domain.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class RoleRepositoryJPAAdapter implements RoleRepository {

    private final RoleRepositoryJPA roleRepositoryJPA;


    @Autowired
    public RoleRepositoryJPAAdapter(RoleRepositoryJPA repo) {
        this.roleRepositoryJPA = repo;
    }

    @Override
    public Optional<Role> findById(Long id) {
        return roleRepositoryJPA.findById(id);
    }

    @Override
    public Optional<Role> findByName(String name) {
        return roleRepositoryJPA.findByName(name);
    }

    @Override
    public void save(Role role) {
        roleRepositoryJPA.save(role);
    }

    @Override
    public void delete(Role role) {
        roleRepositoryJPA.delete(role);
    }

    @Override
    public List<Role> findAll() {
        return roleRepositoryJPA.findAll();
    }
}
