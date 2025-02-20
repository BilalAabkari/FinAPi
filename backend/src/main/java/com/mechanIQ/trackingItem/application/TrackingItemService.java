package com.mechanIQ.trackingItem.application;


import com.mechanIQ.trackingField.domain.TrackingField;
import com.mechanIQ.trackingItem.domain.TrackingItem;
import com.mechanIQ.trackingItem.domain.TrackingItemRepository;
import com.mechanIQ.user.adapters.dto.CreateTrackingFieldRequest;
import com.mechanIQ.user.adapters.dto.CreateTrackingItemRequest;
import com.mechanIQ.user.application.UserService;
import com.mechanIQ.user.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class TrackingItemService {

    private final TrackingItemRepository trackingItemRepository;
    private final UserService userService;

    @Autowired
    public TrackingItemService(TrackingItemRepository trackingItemRepository, UserService userService) {
        this.userService = userService;
        this.trackingItemRepository = trackingItemRepository;
    }

    @Transactional
    public TrackingItem createTrackingItem(Long userId, CreateTrackingItemRequest createTrackingItemRequest) {
        User user = userService.findUser(userId);

        TrackingItem trackingItem = new TrackingItem(
                user,
                createTrackingItemRequest.name,
                createTrackingItemRequest.identifier,
                createTrackingItemRequest.type,
                createTrackingItemRequest.category,
                createTrackingItemRequest.description,
                new ArrayList<>());

        ArrayList<TrackingField> trackingFields = new ArrayList<>();

        for (CreateTrackingFieldRequest field : createTrackingItemRequest.trackingFields) {
            TrackingField newTrackingField = new TrackingField(field.name, field.type);
            newTrackingField.setTrackingItem(trackingItem);
            trackingFields.add(newTrackingField);
        }

        trackingItem.setTrackingFields(trackingFields);
        return trackingItemRepository.save(trackingItem);
    }

    public List<TrackingItem> getTrackingItems(Long userId) {
        return trackingItemRepository.findAllByUserId(userId);
    }
}
