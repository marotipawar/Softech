package com.softtech.data;

import com.softtech.model.Address;
import com.softtech.model.Batch;
import com.softtech.model.Student;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class StudentData {

    public List<Student> data(){
        Batch batch1=Batch.builder()
                .id(1)
                .name("15 APl 2023")
                .subs(new String[]{"Manual Testing","Automation Testing","API Testing",
                        "Database Testing", "Postman","Junit","TestNG","Cucumber","Selenium" })
                .duration(4)
                .fees(35000.0)
                .endDate(LocalDateTime.now())
                .endDate(LocalDateTime.now().plusMonths(4))
                .build();

        Student st1=Student.builder()
                .id(101)
                .firstName("Maroti")
                .lastName("Pawar")
                .panNo("MP564NA")
                .aadharNo("6598154687")
                .mobile(new BigInteger(String.valueOf(987654321)))
                .address(
                        Address.builder()
                                .id(1)
                                .city("Nanded")
                                .state("Maharashtra")
                                .country("India")
                                .pinCode(123456)
                                .build()
                )
                .batch(batch1)
                .build();


        Student st2=Student.builder()
                .id(102)
                .firstName("Jyoti")
                .lastName("Patil")
                .panNo("JP5845NED")
                .aadharNo("2546815458")
                .mobile(new BigInteger(String.valueOf(887654322)))
                .address(
                        Address.builder()
                                .id(2)
                                .city("Pune")
                                .state("Maharashtra")
                                .country("India")
                                .pinCode(410011)
                                .build()
                )
                .batch(batch1)
                .build();

        Student st3=Student.builder()
                .id(103)
                .firstName("Priyanka")
                .lastName("Pawar")
                .panNo("PP6584L")
                .aadharNo("3549815512")
                .mobile(new BigInteger(String.valueOf(997654323)))
                .address(
                        Address.builder()
                                .id(3)
                                .city("Mumbai")
                                .state("Maharashtra")
                                .country("India")
                                .pinCode(410001)
                                .build()
                )
                .batch(batch1)
                .build();

        Student st4=Student.builder()
                .id(104)
                .firstName("Aranv")
                .lastName("Patil")
                .panNo("AP6584N")
                .aadharNo("5468425612")
                .mobile(new BigInteger(String.valueOf(999654324)))
                .address(
                        Address.builder()
                                .id(4)
                                .city("Pune")
                                .state("Maharashtra")
                                .country("India")
                                .pinCode(410011)
                                .build()
                )
                .batch(batch1)
                .build();

        List<Student> studentList=Stream.of(st1,st2,st3,st4).collect(Collectors.toList());
        return studentList;
    }
}
