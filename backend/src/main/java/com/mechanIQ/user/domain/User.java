package com.mechanIQ.user.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mechanIQ.common.base.BaseEntity;
import com.mechanIQ.role.domain.Role;
import com.mechanIQ.trackingItem.domain.TrackingItem;
import jakarta.persistence.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tbl_user")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @JsonIgnore
    @Column(nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "tbl_user_role",
            joinColumns = @JoinColumn(name = "tbl_user_id"),
            inverseJoinColumns = @JoinColumn(name = "tbl_role_id"))
    private Set<Role> roles;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<TrackingItem> trackingItems;

    public Long getId() {
        return id;
    }

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

    @JsonIgnore
    public String getPassword() {
        return this.password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    @Transactional
    public void addRole(Role role) {
        roles.add(role);
        role.addUser(this);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<TrackingItem> getTrackingItems() {
        return trackingItems;
    }
}
