package com.mechanIQ.user.application;

import com.mechanIQ.user.adapters.JPAUserRepository;
import com.mechanIQ.user.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final JPAUserRepository userRepository;

    @Autowired
    public CustomUserDetailsService(JPAUserRepository userRepository) {
        super();
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String identifier) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(identifier);
        if (user.isEmpty()) {
            user = userRepository.findByUsername(identifier);
            if (user.isEmpty()) {
                throw new UsernameNotFoundException(identifier);
            }
        }
        User userDetails = user.get();

        return new org.springframework.security.core.userdetails.User(
                userDetails.getEmail(),
                userDetails.getPassword(),
                new ArrayList<>());

    }
}
