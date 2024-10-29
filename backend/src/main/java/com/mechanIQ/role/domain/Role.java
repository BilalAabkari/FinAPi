package com.mechanIQ.role.domain;

import com.mechanIQ.user.domain.User;
import jakarta.persistence.*;

import java.util.HashSet;

@Entity
@Table(name = "tbl_role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @ManyToMany(fetch = FetchType.LAZY)
    private HashSet<User> users = new HashSet<>();

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public HashSet<User> getUsers() {
        return users;
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void setName(String name) {
        this.name = name;
    }



}
