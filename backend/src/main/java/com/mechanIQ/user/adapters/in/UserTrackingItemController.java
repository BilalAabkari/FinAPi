package com.mechanIQ.user.adapters.in;

import com.mechanIQ.trackingItem.application.TrackingItemService;
import com.mechanIQ.trackingItem.domain.TrackingItem;
import com.mechanIQ.user.adapters.dto.CreateTrackingItemRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/{userId}/tracking-items")
public class UserTrackingItemController {

    private final TrackingItemService trackingItemService;

    @Autowired
    public UserTrackingItemController(TrackingItemService trackingItemService) {
        this.trackingItemService = trackingItemService;
    }

    @PostMapping
    @PreAuthorize("#userId == authentication.principal.id")
    public TrackingItem createTrackingItem(@PathVariable Long userId, @Valid @RequestBody CreateTrackingItemRequest createTrackingItemRequest) {
        return trackingItemService.createTrackingItem(userId, createTrackingItemRequest);
    }

    @GetMapping
    @PreAuthorize("#userId == authentication.principal.id")
    public List<TrackingItem> getTrackingItems(@PathVariable Long userId) {
        return trackingItemService.getTrackingItems(userId);
    }


}
