package com.mechanIQ.user.adapters;

import com.mechanIQ.user.application.UserService;
import com.mechanIQ.user.domain.User;
import com.mechanIQ.user.dto.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public User signupUser(@RequestBody SignupRequest signupRequest) {
        return this.userService.signup(signupRequest);
    }
}
