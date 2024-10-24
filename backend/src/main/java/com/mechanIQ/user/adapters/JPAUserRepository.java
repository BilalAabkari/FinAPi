package com.mechanIQ.user.adapters;

import com.mechanIQ.user.domain.User;
import com.mechanIQ.user.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class JPAUserRepository implements UserRepository {

    private final UserJpaRepository userJpaRepository;

    @Autowired
    public JPAUserRepository(UserJpaRepository userJpaRepository) {this.userJpaRepository = userJpaRepository;}

    @Override
    public Optional<User> findById(Long id) {
        return userJpaRepository.findById(id);
    }

    @Override
    public void save(User user) {

    }
}
