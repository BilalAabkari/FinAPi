package com.mechanIQ.user.adapters.dto;

import com.mechanIQ.trackingItem.domain.TrackingItem;

import java.util.List;

public class CreateTrackingItemRequest {


    public String name;

    public String identifier;

    public TrackingItem.Type type;

    public String category;

    public String description;

    public List<CreateTrackingFieldRequest> trackingFields;
}
