package iuh.fit;

import iuh.fit.dao.DoctorDAO;
import iuh.fit.dao.impl.DoctorDAOImpl;
import iuh.fit.model.Department;
import iuh.fit.model.Doctor;
import iuh.fit.util.AppUtils;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        DoctorDAO doctorDAO = new DoctorDAOImpl(AppUtils.getDriver(), "betuann22690731");

//        Doctor doctor = new Doctor();
//        doctor.setId("D441");
//        doctor.setName("Nguyen Van A");
//        doctor.setPhone("0123456789");
//        doctor.setSpeciality("Heart");
//
//        System.out.println(doctorDAO.addDoctor(doctor));


//        doctorDAO.getNoOfDoctorsBySpeciality("Preventive Medicine").forEach((k, v) -> {
//            System.out.println(k + " : " + v);
//        });

//        ArrayList<Doctor> list = (ArrayList<Doctor>) doctorDAO.listDoctorsBySpeciality("Cardiology");
//        for (Doctor doctor : list) {
//            System.out.println(doctor);
//        }

        boolean result = doctorDAO.updateDiagnosis("PT007", "DR.013", "Test");
        System.out.println(result);
    }
}