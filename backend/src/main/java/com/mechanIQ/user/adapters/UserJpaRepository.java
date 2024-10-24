package com.mechanIQ.user.adapters;

import com.mechanIQ.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaRepository extends JpaRepository<User, Long> {
}
