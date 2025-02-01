package com.mechanIQ.trackingItem.adapters.out;

import com.mechanIQ.trackingItem.domain.TrackingItem;
import com.mechanIQ.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface JPATrackingItemRepositoryBase extends JpaRepository<TrackingItem, Long> {

    Optional<TrackingItem> findByUser(User user);

}
