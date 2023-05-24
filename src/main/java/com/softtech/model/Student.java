package com.softtech.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Student {
    private Integer id;
    private String firstName;
    private String lastName;
    private BigInteger mobile;
    private String aadharNo;
    private String panNo;
    private Address address;
    private Batch batch;

}
