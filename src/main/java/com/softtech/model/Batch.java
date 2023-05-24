package com.softtech.model;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class Batch {
    private Integer id;
    private String name;
    private String[] subs;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Double fees;
    private Integer duration;

}
