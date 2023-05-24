package com.softtech.exceptions;

public class StudentNotFound extends RuntimeException{

    public StudentNotFound(Integer id){
        super("Student not found : "+id);
    }
}
