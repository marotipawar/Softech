package com.softtech.serviceImpl;

import com.softtech.dao.StudentDao;
import com.softtech.data.StudentData;
import com.softtech.model.Student;
import com.softtech.services.StudentServices;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentServices {
    private StudentDao studentDao;

    public StudentServiceImpl(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    @Override
    public Student findStudent(Integer id) {
        return studentDao.findStudent(id);
    }

    @Override
    public List<Student> findAllStudent() {
        return studentDao.findAllStudent();
    }

    @Override
    public Student updateStudent(Student std) {
        return studentDao.updateStudent(std);
    }

    @Override
    public void deleteStudent(Integer id) {
        studentDao.deleteStudent(id);
    }
}
