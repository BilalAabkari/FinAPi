package com.mechanIQ.user.domain;

import java.util.Optional;

public interface UserRepository {
    Optional<User> findById(Long id);
    void save(User user);
}
