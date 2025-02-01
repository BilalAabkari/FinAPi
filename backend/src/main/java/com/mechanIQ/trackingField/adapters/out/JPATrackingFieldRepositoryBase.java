package com.mechanIQ.trackingField.adapters.out;

import com.mechanIQ.trackingField.domain.TrackingField;
import com.mechanIQ.trackingItem.domain.TrackingItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JPATrackingFieldRepositoryBase extends JpaRepository<TrackingField, Long> {
    List<TrackingField> findAllByTrackingItem(TrackingItem trackingItem);
}
