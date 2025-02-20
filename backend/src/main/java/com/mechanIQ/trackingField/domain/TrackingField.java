package com.mechanIQ.trackingField.domain;

import com.mechanIQ.common.base.BaseEntity;
import com.mechanIQ.trackingItem.domain.TrackingItem;
import jakarta.persistence.*;

@Entity
@Table(name = "tbl_tracking_field")
public class TrackingField extends BaseEntity {

    public enum Type {
        TEXT,
        LONG_TEXT,
        NUMBER
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Type type;

    @ManyToOne
    @JoinColumn(nullable = false, name = "tracking_item_id")
    private TrackingItem trackingItem;

    public TrackingField() {}

    public TrackingField(String name, Type type) {
        this.name = name;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Type getType() {
        return type;
    }

    public void setTrackingItem(TrackingItem trackingItem) {
        this.trackingItem = trackingItem;
    }


}

