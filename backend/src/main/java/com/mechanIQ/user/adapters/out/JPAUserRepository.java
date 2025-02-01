package com.mechanIQ.user.adapters.out;

import com.mechanIQ.user.domain.User;
import com.mechanIQ.user.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class JPAUserRepository implements UserRepository {

    private final UserJpaRepositoryBase userJpaRepositoryBase;

    @Autowired
    public JPAUserRepository( UserJpaRepositoryBase userJpaRepositoryBase) {
        this.userJpaRepositoryBase = userJpaRepositoryBase;
    }

    @Override
    public Optional<User> findById(Long id) {
        return userJpaRepositoryBase.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        return userJpaRepositoryBase.findByEmail(email);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userJpaRepositoryBase.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmailOrUsername(String email, String password) {
        return userJpaRepositoryBase.findByEmailOrUsername(email, password);
    }

    @Override
    public User save(User user) {
        return userJpaRepositoryBase.save(user);
    }
}
