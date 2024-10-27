package com.mechanIQ.user.dto;

public class SignupRequest
{

    private String name;
    private String surname;
    private String username;
    private String email;
    private String password;

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
