package com.mechanIQ.trackingItem.domain;

import com.mechanIQ.user.domain.User;
import jakarta.persistence.*;

@Entity
@Table(name = "tbl_tracking_item")
public class TrackingItem {

    public static final Integer INCOME = 0;
    public static final Integer EXPENSE = 1;

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String identifier;

    private Integer type;

    private String category;

    private String description;

    private boolean deleted;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getIdentifier() {
        return identifier;
    }

    public User getUser() {
        return user;
    }

    public Integer getType() {
        return type;
    }

    public String getCategory() {
        return category;
    }

    public String getDescription() {
        return description;
    }


}
