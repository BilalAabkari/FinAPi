package com.mechanIQ.common.exceptions;

public class ErrorMessage {
    private final String message;
    private final String details;
    private final int errorCode;

    public ErrorMessage(String message, String details, int errorCode) {
        this.message = message;
        this.details = details;
        this.errorCode = errorCode;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }

    public int getErrorCode() {
        return errorCode;
    }
}
