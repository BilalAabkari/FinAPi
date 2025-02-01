package com.mechanIQ.common.exceptions;

import org.springframework.http.HttpStatus;

public class CustomException extends RuntimeException {

    private final String msg;

    private final int code;

    private final HttpStatus status;

    public CustomException(HttpStatus status, String msg) {
        this.msg = msg;
        this.code = status.value();
        this.status = status;
    }

    public CustomException(HttpStatus status, String msg, int code) {
        this.msg = msg;
        this.code = code;
        this.status = status;
    }

    @Override
    public String getMessage() {
        return msg;
    }

    public int getCode() {
        return code;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
