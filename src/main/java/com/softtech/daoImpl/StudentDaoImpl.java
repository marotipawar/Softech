package com.softtech.daoImpl;

import com.softtech.dao.StudentDao;
import com.softtech.data.StudentData;
import com.softtech.model.Address;
import com.softtech.model.Batch;
import com.softtech.model.Student;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentDaoImpl implements StudentDao {
    private StudentData studentData;

    public StudentDaoImpl(StudentData studentData) {
        this.studentData = studentData;
    }

    @Override
    public Student findStudent(Integer id) {
        return studentData.data().get(id);
    }

    @Override
    public List<Student> findAllStudent() {
        return studentData.data();
    }

    @Override
    public Student updateStudent(Student std) {
        Student student=studentData.data().get(std.getId());
        student.setFirstName(std.getFirstName());
        student.setLastName(std.getLastName());
        Batch batch =student.getBatch();
        batch.setName(std.getBatch().getName());
        batch.setDuration(std.getBatch().getDuration());
        batch.setFees(std.getBatch().getFees());
        batch.setSubs(std.getBatch().getSubs());
        batch.setStartDate(std.getBatch().getStartDate());
        batch.setEndDate(std.getBatch().getEndDate());
        student.setBatch(std.getBatch());
        student.setAadharNo(std.getAadharNo());
        Address add =student.getAddress();
        add.setCity(std.getAddress().getCity());
        add.setState(std.getAddress().getState());
        add.setCountry(std.getAddress().getCountry());
        add.setPinCode(std.getAddress().getPinCode());
        student.setAddress(add);
        student.setMobile(std.getMobile());
        student.setPanNo(std.getPanNo());
        studentData.data().add(student);
        return student;
    }

    @Override
    public void deleteStudent(Integer id) {
        Student student=studentData.data().get(id);
        studentData.data().remove(student);

    }
}
