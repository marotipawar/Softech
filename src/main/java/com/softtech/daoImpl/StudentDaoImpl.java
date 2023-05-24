package com.softtech.daoImpl;

import com.softtech.dao.StudentDao;
import com.softtech.data.StudentData;
import com.softtech.exceptions.StudentNotFound;
import com.softtech.model.Address;
import com.softtech.model.Batch;
import com.softtech.model.Student;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentDaoImpl implements StudentDao {
    private StudentData studentData;
    List<Student> data;

    public StudentDaoImpl(StudentData studentData) {
        this.studentData = studentData;
        data=studentData.data();
    }

    @Override
    public Student create(Student std) {
        data.add(std);
        return std;
    }

    @Override
    public Student findStudent(Integer id) {

        try {
            Student student = data.stream().filter(std -> std.getId() == id).findFirst().get();
            if (student != null) {
                return student;
            }
        } catch (Exception e) {

            throw new StudentNotFound(id);
        }
        return null;
    }

    @Override
    public List<Student> findAllStudent() {
        return data;
    }

    @Override
    public Student updateStudent(Integer id, Student std) {
        Student student=data.stream().filter(s->s.getId()==id).findFirst().get();
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
        Student student=data.stream().filter(student1 -> student1.getId()==id).findFirst().get();
        studentData.data().remove(student);

    }
}
