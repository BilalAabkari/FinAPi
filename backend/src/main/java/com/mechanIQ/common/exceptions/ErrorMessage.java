package com.mechanIQ.common.exceptions;

import java.util.ArrayList;
import java.util.List;

public class ErrorMessage {
    private final String message;
    private final String details;
    private final int errorCode;
    private final List<String> errors;

    public ErrorMessage(String message, String details, int errorCode) {
        this.message = message;
        this.details = details;
        this.errorCode = errorCode;
        this.errors = new ArrayList<String>();
    }

    public ErrorMessage(String message, String details, int errorCode, List<String> errors) {
        this.message = message;
        this.details = details;
        this.errorCode = errorCode;
        this.errors = errors;
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

    public List<String> getErrors() {return errors;}
}
