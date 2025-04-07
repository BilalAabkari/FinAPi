package com.mechanIQ.user.adapters.in;

import com.mechanIQ.trackingItem.application.TrackingItemService;
import com.mechanIQ.trackingItem.domain.TrackingItem;
import com.mechanIQ.user.adapters.dto.CreateTrackingItemRequest;
import com.mechanIQ.user.application.CustomUserDetails;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/tracking-items")
public class UserTrackingItemController {

    private final TrackingItemService trackingItemService;

    @Autowired
    public UserTrackingItemController(TrackingItemService trackingItemService) {
        this.trackingItemService = trackingItemService;
    }

    @PostMapping
    public TrackingItem createTrackingItem( @Valid @RequestBody CreateTrackingItemRequest createTrackingItemRequest,
                                            Authentication authentication) {
        Long userId = ((CustomUserDetails) authentication.getPrincipal()).getId();
        return trackingItemService.createTrackingItem(userId, createTrackingItemRequest);
    }

    @GetMapping
    public List<TrackingItem> getTrackingItems(Authentication authentication) {
        Long userId = ((CustomUserDetails) authentication.getPrincipal()).getId();
        return trackingItemService.getTrackingItems(userId);
    }


}
