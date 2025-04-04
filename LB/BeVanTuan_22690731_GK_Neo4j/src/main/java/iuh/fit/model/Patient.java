package iuh.fit.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true)
public class Patient extends Person{

    private Gender gender;
    private String dateOfBirth;
    private String address;
}
