package com.softtech.daoImpl;

import com.softtech.dao.StudentDao;
import com.softtech.model.Student;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentDaoImpl implements StudentDao {
    @Override
    public Student findStudent(Long id) {
        return null;
    }

    @Override
    public List<Student> findAllStudent() {
        return null;
    }

    @Override
    public Student updateStudent(Student std) {
        return null;
    }

    @Override
    public void deleteStudent(Student id) {

    }
}
