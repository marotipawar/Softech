package com.softtech.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties({"id","firstName","lastName","mobile","aadharNo","panNo","address","batch"})
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
