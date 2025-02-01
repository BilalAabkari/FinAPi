package com.mechanIQ.trackingField.adapters.out;

import com.mechanIQ.trackingField.domain.TrackingField;
import com.mechanIQ.trackingField.domain.TrackingFieldRepository;
import com.mechanIQ.trackingItem.domain.TrackingItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JPATrackingFieldRepository implements TrackingFieldRepository {

    private final JPATrackingFieldRepositoryBase jpaRepository;

    @Autowired
    public JPATrackingFieldRepository(JPATrackingFieldRepositoryBase jpaTrackingFieldRepository) {
        this.jpaRepository = jpaTrackingFieldRepository;
    }

    @Override
    public List<TrackingField> getTrackingFields(TrackingItem trackingItem) {
        return jpaRepository.findAllByTrackingItem(trackingItem);
    }

    @Override
    public void saveTrackingField(TrackingField trackingField) {
        jpaRepository.save(trackingField);
    }
}
