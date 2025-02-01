package com.mechanIQ.trackingItem.domain;


import com.mechanIQ.common.base.BaseEntity;
import com.mechanIQ.trackingField.domain.TrackingField;
import com.mechanIQ.user.domain.User;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tbl_tracking_item")
public class TrackingItem extends BaseEntity {

    public enum Type {
        EXPENSE,
        INCOME,
    }

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

    private Type type;

    private String category;

    private String description;

    @OneToMany(mappedBy = "trackingItem", cascade = CascadeType.ALL)
    private List<TrackingField> trackingFields;

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

    public Type getType() {
        return type;
    }

    public String getCategory() {
        return category;
    }

    public String getDescription() {
        return description;
    }

    public List<TrackingField> getTrackingFields() {
        return trackingFields;
    }


}
