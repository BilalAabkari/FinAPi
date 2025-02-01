package com.mechanIQ.trackingField.domain;

import com.mechanIQ.trackingItem.domain.TrackingItem;

import java.util.List;

public interface TrackingFieldRepository {

    List<TrackingField> getTrackingFields(TrackingItem trackingItem);
    void saveTrackingField(TrackingField trackingField);

}
