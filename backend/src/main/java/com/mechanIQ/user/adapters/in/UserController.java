package com.mechanIQ.user.adapters.in;

import com.mechanIQ.user.application.UserService;
import com.mechanIQ.user.domain.User;
import com.mechanIQ.user.dto.LoginRequest;
import com.mechanIQ.user.dto.SignupRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextHolderStrategy;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final AuthenticationManager authenticationManager;
    private final SecurityContextRepository securityContextRepository =
            new HttpSessionSecurityContextRepository();
    private final SecurityContextHolderStrategy securityContextHolderStrategy = SecurityContextHolder.getContextHolderStrategy();


    private final UserService userService;

    @Autowired
    public UserController(UserService userService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/signup")
    public User signupUser(@RequestBody SignupRequest signupRequest, HttpServletRequest request, HttpServletResponse response) {
        User user = this.userService.signup(signupRequest);

        login(request, response, signupRequest.getUsername(), signupRequest.getPassword());
        return user;
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest loginRequest, HttpServletRequest request, HttpServletResponse response) {

        login(request, response, loginRequest.getUsername(), loginRequest.getPassword());
        return userService.findAuthenticatedUser(loginRequest.getUsername(), loginRequest.getUsername());
    }


    @PostMapping("/logout")
    public void logout(HttpServletRequest request) {
        request.getSession().invalidate();
        SecurityContextHolder.clearContext();
    }

    @GetMapping("/auth")
    public User auth() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            org.springframework.security.core.userdetails.UserDetails userDetailsService =
                    (org.springframework.security.core.userdetails.UserDetails) authentication.getPrincipal();
            return userService.findAuthenticatedUser(userDetailsService.getUsername(), userDetailsService.getUsername());

        }
        throw new RuntimeException("User is not authenticated");
    }

    private void login(HttpServletRequest request, HttpServletResponse response, String username, String password) {
        UsernamePasswordAuthenticationToken token = UsernamePasswordAuthenticationToken.unauthenticated(
                username,
                password);

        Authentication authentication = authenticationManager.authenticate(token);
        SecurityContext context = securityContextHolderStrategy.createEmptyContext();
        context.setAuthentication(authentication);
        securityContextHolderStrategy.setContext(context);
        securityContextRepository.saveContext(context, request, response);
    }
}
