package iuh.fit.server;

import iuh.fit.dao.DoctorDAO;
import iuh.fit.dao.impl.DoctorDAOImpl;
import iuh.fit.model.Department;
import iuh.fit.model.Doctor;
import iuh.fit.util.AppUtils;

import javax.print.Doc;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;
import java.util.List;
import java.util.Map;

public class ClientHandle implements Runnable {
    private Socket socket;
    private DoctorDAO doctorDAO;
    public ClientHandle(Socket socket) {
        this.socket = socket;
        doctorDAO = new DoctorDAOImpl(AppUtils.getDriver(), "betuann22690731");
    }


    @Override
    public void run() {
        try (DataInputStream in = new DataInputStream(socket.getInputStream());
             DataOutputStream out = new DataOutputStream(socket.getOutputStream())
        ) {
            while (true) {
                String menu = "======Menu=====\n" +
                        "1. Add doctor\n" +
                        "2. Get number Of Doctors By Speciality\n" +
                        "3. Find doctor by speciality\n" +
                        "4. Update diagnosis\n" +
                        "5. Exit\n" +
                        "===============\n" +
                        "Choose: ";
                out.writeUTF(menu);

                int choice = in.readInt();
                if (choice == 5) {
                    break;
                }
                switch (choice) {
                    case 1:
                        Doctor doctor = new Doctor();
                        doctor.setId(in.readUTF());
                        doctor.setName(in.readUTF());
                        doctor.setPhone(in.readUTF());
                        doctor.setSpeciality(in.readUTF());
                        boolean result = doctorDAO.addDoctor(doctor);
                        out.writeUTF(result == true ? "Them bac si thanh cong" : "Khong the them bac si!");
                        break;
                    case 2:
                        String departmentName = in.readUTF();
                        Map<String, Long> list = doctorDAO.getNoOfDoctorsBySpeciality(departmentName);
                        out.writeUTF("So luong bac si theo chuyen khoa cua phòng ban " + departmentName + ":");
                        for (Map.Entry<String, Long> entry : list.entrySet()) {
                            out.writeUTF(entry.getKey() + ": " + entry.getValue());
                        }
                        out.writeUTF("END");
                        break;
                    case 3:
                        String speciality = in.readUTF();
                        List<Doctor> doctors = doctorDAO.listDoctorsBySpeciality(speciality);
                        out.writeUTF("Danh sach bac si theo chuyen khoa " + speciality + ":");
                        for (Doctor d : doctors) {
                            out.writeUTF(d.toString());
                        }
                        out.writeUTF("END");
                        break;
                    case 4:
                        String doctorID = in.readUTF();
                        String patientID = in.readUTF();
                        String diagnosis = in.readUTF();
                        boolean resutl2 = doctorDAO.updateDiagnosis(patientID, doctorID, diagnosis);
                        out.writeUTF(resutl2 == true ? "Cap nhat chuan doan thanh cong\n" : "Khong the cap nhat chuyen doan!\n");
                        break;
                    default:
                        out.writeUTF("Invalid choice!");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
