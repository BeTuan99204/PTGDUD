    package iuh.fit.dao.impl;

    import iuh.fit.dao.DoctorDAO;
    import iuh.fit.model.Doctor;
    import iuh.fit.util.AppUtils;
    import org.neo4j.driver.Driver;
    import org.neo4j.driver.Result;
    import org.neo4j.driver.SessionConfig;
    import org.neo4j.driver.summary.ResultSummary;
    import org.neo4j.driver.types.Node;

    import javax.print.Doc;
    import java.util.*;

    public class DoctorDAOImpl implements DoctorDAO {

        private Driver driver;
        private SessionConfig sessionConfig;

        public DoctorDAOImpl(Driver driver, String dbName) {
            this.driver = driver;
            sessionConfig = SessionConfig.builder().withDatabase(dbName).build();
        }

        @Override
        public boolean addDoctor(Doctor doctor) {
            String query = "CREATE (d:Doctor { " +
                    "id: $id, " +
                    "name: $name, " +
                    "phone: $phone, " +
                    "speciality: $speciality" +
                    "}) ";
            Map<String, Object> params = Map.of(
                    "id", doctor.getId(),
                    "name", doctor.getName(),
                    "phone", doctor.getPhone(),
                    "speciality", doctor.getSpeciality()
            );
            try (var session = driver.session(sessionConfig)) {
                return session.executeWrite(tx -> {
                    ResultSummary result = tx.run(query, params).consume();
                    return result.counters().nodesCreated() > 0;
                });
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        }

        @Override
        public Map<String, Long> getNoOfDoctorsBySpeciality(String departmentName) {
            String query = "MATCH (d:Doctor) -[:BELONG_TO]-> (dep:Department {name: $departmentName}) " +
                    "RETURN d.speciality as speciality, COUNT(d) AS count";
            Map<String, Long> resultMap = new HashMap<>();
            Map<String, Object> params = Map.of(
                    "departmentName", departmentName
            );

            try (var session = driver.session(sessionConfig)) {
                return session.executeRead(tx -> {
                    Result result = tx.run(query, params);
                    result.list(record -> {
                        resultMap.put(record.get("speciality").asString(), record.get("count").asLong());
                        return record;
                    });
                    return resultMap;
                });
            } catch (Exception e) {
                e.printStackTrace();
            }

            return resultMap;
        }

        @Override
        public List<Doctor> listDoctorsBySpeciality(String keyword) {
            String query = "CALL db.index.fulltext.queryNodes(\"txt_index_speciality\", $keyword) YIELD node \n" +
                    "RETURN node";
            List<Doctor> list = new ArrayList<>();
            Map<String, Object> params = Map.of(
                    "keyword", keyword
            );
            try (var session = driver.session(sessionConfig)) {
                return session.executeRead(tx -> {
                    Result result = tx.run(query, params);
                    result.list(record -> {
                        Node node = record.get("node").asNode();
                        Doctor doctor = AppUtils.toDoctor(node);
                        list.add(doctor);
                        return record;
                    });
                    return list;
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }

        @Override
        public boolean updateDiagnosis(String patientID, String doctorID, String newDiagnosis) {
            String query = "MATCH (d:Doctor {id: $doctorID}) <-[r:BE_TREATED]- (p:Patient {id: $patientID})\n" +
                    "WHERE r.endDate IS NULL\n" +
                    "SET r.diagnosis = $newDiagnosis";
            Map<String, Object> params = Map.of(
                "doctorID", doctorID,
                "patientID", patientID,
                "newDiagnosis", newDiagnosis
            );
            try (var session = driver.session(sessionConfig)) {
                return session.executeWrite(tx -> {
                    ResultSummary result = tx.run(query, params).consume();
                    return result.counters().propertiesSet() > 0;
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
            return false;
        }
    }
