package com.mechanIQ.user.adapters.dto;

import com.mechanIQ.trackingItem.domain.TrackingItem;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public class CreateTrackingItemRequest {

    @NotBlank(message = "Name is required")
    public String name;

    @NotBlank(message = "Identifier is required")
    public String identifier;

    public TrackingItem.Type type;

    public String category;

    public String description;

    @Valid
    @NotNull
    @Size(min = 1)
    public List<CreateTrackingFieldRequest> trackingFields;
}
