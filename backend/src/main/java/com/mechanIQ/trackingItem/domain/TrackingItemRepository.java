package com.mechanIQ.trackingItem.domain;

import com.mechanIQ.user.domain.User;

import java.util.Optional;

public interface TrackingItemRepository {
    Optional<TrackingItem> findById(Long id);
    Optional<TrackingItem> findByUser(User user);
}
