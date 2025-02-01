package com.mechanIQ.trackingItem.adapters.out;

import com.mechanIQ.trackingItem.domain.TrackingItem;
import com.mechanIQ.trackingItem.domain.TrackingItemRepository;
import com.mechanIQ.user.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class JPATrackingItemRepository implements TrackingItemRepository {

    private final JPATrackingItemRepositoryBase jpaTrackingItemRepositoryBase;

    @Autowired
    public JPATrackingItemRepository(JPATrackingItemRepositoryBase jpaTrackingItemRepositoryBase) {
        this.jpaTrackingItemRepositoryBase = jpaTrackingItemRepositoryBase;
    }

    @Override
    public Optional<TrackingItem> findById(Long id) {
        return jpaTrackingItemRepositoryBase.findById(id);
    }

    @Override
    public Optional<TrackingItem> findByUser(User user) {
        return jpaTrackingItemRepositoryBase.findByUser(user);
    }

    @Override
    public TrackingItem save(TrackingItem trackingItem) {
        return jpaTrackingItemRepositoryBase.save(trackingItem);
    }
}
