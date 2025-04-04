package iuh.fit.model;


import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Department {

    @EqualsAndHashCode.Include
    private String id;
    private String name;
    private String location;

    public Department(String id) {
        this.id = id;
    }
}
