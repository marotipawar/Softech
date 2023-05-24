package com.softtech.advice;

import com.softtech.exceptions.StudentNotFound;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;

@ControllerAdvice
public class StudentControllerAdvice extends ResponseEntityExceptionHandler {

    @ExceptionHandler(StudentNotFound.class)
    public void singleHandleNotFound(HttpServletResponse response)throws IOException {
        response.sendError(HttpStatus.NOT_FOUND.value());
    }
}
