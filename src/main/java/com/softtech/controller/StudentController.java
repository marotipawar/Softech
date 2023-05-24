package com.softtech.controller;

import com.softtech.exceptions.StudentNotFound;
import com.softtech.model.Student;
import com.softtech.services.StudentServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    private StudentServices studentServices;

    public StudentController(StudentServices studentServices) {
        this.studentServices = studentServices;
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
        studentServices.deleteStudent(id);

    }



}
