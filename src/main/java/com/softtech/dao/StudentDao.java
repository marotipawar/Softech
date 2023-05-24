package com.softtech.dao;

import com.softtech.model.Student;

import java.util.List;

public interface StudentDao {
    public Student create(Student std);
    public Student findStudent(Integer id);
    public List<Student> findAllStudent();
    public Student updateStudent(Integer id, Student std);
    public void deleteStudent(Integer id);
}
