package iuh.fit.dao.impl;

import iuh.fit.dao.DoctorDAO;
import iuh.fit.model.Department;
import iuh.fit.model.Doctor;
import iuh.fit.util.AppUtils;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class DoctorDAOImplTest {

    @Test
    void addDoctor() {
        DoctorDAO doctorDAO = new DoctorDAOImpl(AppUtils.getDriver(), "betuann22690731");
        Doctor doctor = new Doctor();
        doctor.setId("DR.555");
        doctor.setName("Be Van Tuan");
        doctor.setPhone("038964435");
        doctor.setSpeciality("Preventive Medicine");
        assertTrue(doctorDAO.addDoctor(doctor));
    }

    @Test
    void getNoOfDoctorsBySpeciality() {
        DoctorDAO doctorDAO = new DoctorDAOImpl(AppUtils.getDriver(), "betuann22690731");
        Map<String, Long> result = doctorDAO.getNoOfDoctorsBySpeciality("Internal Medicine");
        assertNotNull(result);
        assertEquals(6, result.size());
        assertEquals(2, result.get("Dermatology Services"));
    }

    @Test
    void listDoctorsBySpeciality() {
        DoctorDAO doctorDAO = new DoctorDAOImpl(AppUtils.getDriver(), "betuann22690731");
        List<Doctor> list = doctorDAO.listDoctorsBySpeciality("Cardiology");
        assertNotNull(list);
        assertEquals(2, list.size());
    }

    @Test
    void updateDiagnosis() {
        DoctorDAO doctorDAO = new DoctorDAOImpl(AppUtils.getDriver(), "betuann22690731");
        boolean result = doctorDAO.updateDiagnosis("PT007", "DR.015", "Test");
        assertEquals(false, result);
    }
}