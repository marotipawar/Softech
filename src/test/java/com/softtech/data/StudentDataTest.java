package com.softtech.data;

import com.softtech.model.Student;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StudentDataTest {

    private StudentData data;



    @BeforeEach
    void setUp() {
        data=new StudentData();
    }

    @Test
    void fetch() {
        Student std =data.data().stream().findFirst().get();
        assertEquals(std.getId(), 101);
    }
}