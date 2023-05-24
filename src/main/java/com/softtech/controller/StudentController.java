package com.softtech.controller;

import com.softtech.model.Student;
import com.softtech.services.StudentServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {

    private StudentServices studentServices;

    public StudentController(StudentServices studentServices) {
        this.studentServices = studentServices;
    }
    @GetMapping(path = {"/student/{id}"})
    public Student findStudent(@PathVariable Integer id){
        return studentServices.findStudent(id);
    }
    @GetMapping(path = {"/students"})
    public List<Student> findAStudents(){
        return studentServices.findAllStudent();
    }

}
