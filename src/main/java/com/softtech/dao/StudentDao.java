package com.softtech.dao;

import com.softtech.model.Student;

import java.util.List;

public interface StudentDao {
    public Student findStudent(Long id);
    public List<Student> findAllStudent();
    public Student updateStudent(Student std);
    public void deleteStudent(Student id);
}
