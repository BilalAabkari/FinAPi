package com.mechanIQ.user.application;

import com.mechanIQ.user.adapters.JPAUserRepository;
import com.mechanIQ.user.domain.User;
import com.mechanIQ.user.dto.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final JPAUserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(JPAUserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(SignupRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new DataIntegrityViolationException("User already exists.");
        }
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new DataIntegrityViolationException("User already exists.");
        }
        User user = new User();
        user.setEmail(request.getEmail());
        user.setName(request.getName());
        user.setSurname(request.getSurname());
        user.setUsername(request.getUsername());

        String hashedPassword = passwordEncoder.encode(request.getPassword());
        user.setPassword(hashedPassword);

        return userRepository.save(user);
    }

    public User findAuthenticatedUser(String email, String username) {
        Optional<User> user = userRepository.findByEmailOrUsername(email, username);
        if (user.isEmpty()){
            throw new RuntimeException("User not found.");
        }
        return user.get();
    }

}
