package iuh.fit.model;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Person {

    @EqualsAndHashCode.Include
    protected String id;
    protected String name;
    protected String phone;
}
