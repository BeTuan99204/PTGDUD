package iuh.fit.dao;

import iuh.fit.model.Doctor;

import java.util.List;
import java.util.Map;

public interface DoctorDAO {

    boolean addDoctor(Doctor doctor);

    Map<String, Long> getNoOfDoctorsBySpeciality(String departmentName);

    List<Doctor> listDoctorsBySpeciality(String keyword);

    boolean updateDiagnosis(String patientID, String doctorID, String newDiagnosis);
}
