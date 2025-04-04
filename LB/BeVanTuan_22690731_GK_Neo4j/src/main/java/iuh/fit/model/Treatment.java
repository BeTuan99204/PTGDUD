package iuh.fit.model;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Treatment {
    private LocalDate startDate;
    private LocalDate endDate;
    private String diagnosis;

    @ToString.Exclude
    private Doctor doctor;
    @ToString.Exclude
    private Patient patient;
}
