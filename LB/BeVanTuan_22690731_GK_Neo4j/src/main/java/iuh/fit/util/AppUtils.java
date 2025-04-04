package iuh.fit.util;

import iuh.fit.model.Doctor;
import org.neo4j.driver.AuthToken;
import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.neo4j.driver.types.Node;

public class AppUtils {

    public static Driver getDriver() {
        String uri = "bolt://localhost:7687";
        String user = "neo4j";
        String pwd = "12345678";
        AuthToken authToken = AuthTokens.basic(user, pwd);
        return GraphDatabase.driver(uri, authToken);
    }

    public static Doctor toDoctor(Node node) {
        Doctor doctor = new Doctor();
        doctor.setId(node.get("id").asString());
        doctor.setName(node.get("name").asString());
        doctor.setPhone(node.get("phone").asString());
        doctor.setSpeciality(node.get("speciality").asString());
        return doctor;
    }


}
