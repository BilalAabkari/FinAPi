package com.mechanIQ.trackingItem.application;


import com.mechanIQ.trackingItem.domain.TrackingItem;
import com.mechanIQ.trackingItem.domain.TrackingItemRepository;
import com.mechanIQ.user.adapters.dto.CreateTrackingItemRequest;
import com.mechanIQ.user.application.UserService;
import com.mechanIQ.user.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

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

        return trackingItemRepository.save(trackingItem);
    }
}
