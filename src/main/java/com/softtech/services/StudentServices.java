package com.softtech.services;

import com.softtech.model.Student;

import java.util.List;

public interface StudentServices {


    public Student create(Student student);
    public Student findStudent(Integer id);
    public List<Student> findAllStudent();
    public Student updateStudent(Integer id, Student std);
    public void deleteStudent(Integer id);
}
