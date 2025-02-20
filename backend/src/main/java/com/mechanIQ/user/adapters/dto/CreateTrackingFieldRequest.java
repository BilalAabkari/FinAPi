package com.mechanIQ.user.adapters.dto;

import com.mechanIQ.common.validators.ValidEnum;
import com.mechanIQ.trackingField.domain.TrackingField;
import jakarta.validation.constraints.NotBlank;

public class CreateTrackingFieldRequest {


    @NotBlank(message = "name is required")
    public String name;

    @ValidEnum(enumClass = TrackingField.Type.class)
    public TrackingField.Type type;

}
