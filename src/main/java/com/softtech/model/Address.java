package com.softtech.model;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Address {
    private Integer id;
    private String city;
    private String state;
    private String country;
    private Integer pinCode;

}
