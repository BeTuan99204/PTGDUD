package iuh.fit.model;

public enum Gender {
    MALE("Nam"), FEMALE("Nu"), OTHER("Khac");

    private String name;

    Gender(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}
