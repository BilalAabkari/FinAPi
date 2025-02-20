package com.mechanIQ.common.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.ArrayList;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorMessage> handleConflict(DataIntegrityViolationException ex) {
        return new ResponseEntity<>(new ErrorMessage("Data Integrity Violation", ex.getMessage(),0), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorMessage> handleCustomException(CustomException ex) {
        return new ResponseEntity<>(new ErrorMessage(ex.getStatus().getReasonPhrase(), ex.getMessage(), ex.getCode()), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorMessage> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        ArrayList<String> errors = new ArrayList<>();
        ex.getFieldErrors().forEach(error -> errors.add(error.getField() + ": " + error.getDefaultMessage()));

        return new ResponseEntity<>(new ErrorMessage("Bad request", "Validation error", ex.getStatusCode().value(), errors), HttpStatus.BAD_REQUEST);
    }
}
