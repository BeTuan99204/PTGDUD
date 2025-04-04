package iuh.fit.model;

import lombok.*;

@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class Doctor extends Person{
    private String speciality;
    @ToString.Exclude
    private Department department;
}
