package com.softtech.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.softtech.exceptions.StudentNotFound;
import com.softtech.model.Student;
import com.softtech.services.StudentServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;

@RestController
public class StudentController {

    private StudentServices studentServices;


    public StudentController(StudentServices studentServices) {
        this.studentServices = studentServices;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = {"/create"})
    public Student createStudent(@RequestBody Student st){
       return studentServices.create(st);
    }
    @GetMapping(path = {"/student/{id}"})
    public Student findStudent(@PathVariable Integer id){
        Student st=studentServices.findStudent(id);
        if(st!=null){
            return st;
        }else {
            throw new StudentNotFound(id);
        }
        }
    @GetMapping(path = {"/students"})
    public List<Student> findAStudents(){
        return studentServices.findAllStudent();
    }

    @PutMapping(path = {"/update/{id}"})
    public Student updateStudent(@PathVariable Integer id, @RequestBody Student std){
    return studentServices.updateStudent(id,std);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path = {"/delete/{id}"})
    public void deleteStudent(@PathVariable Integer id){
        System.out.println(id);
        studentServices.deleteStudent(id);

    }



}
