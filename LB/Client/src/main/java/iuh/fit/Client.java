package iuh.fit;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) {
        try (
                Socket socket = new Socket("localhost", 0731);
                DataOutputStream out = new DataOutputStream(socket.getOutputStream());
                DataInputStream in = new DataInputStream(socket.getInputStream());
                Scanner sc = new Scanner(System.in);

                ) {
            while (true) {
                String menu = in.readUTF();
                System.out.println(menu);
                int choice = sc.nextInt();
                sc.nextLine();
                out.writeInt(choice);

                switch (choice) {
                    case 1:
                        System.out.println("Enter doctor id: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println("Enter doctor name: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println("Enter doctor phone: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println("Enter doctor speciality: ");
                        out.writeUTF(sc.nextLine());
                        String result = in.readUTF();
                        System.out.println(result);
                        break;
                    case 2:
                        System.out.println("Enter department name: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println(in.readUTF());
                        while (true) {
                            String response = in.readUTF();
                            if (response.equals("END")) break;
                            System.out.println(response);
                        }
                        break;
                    case 3:
                        System.out.println("Enter speciality: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println(in.readUTF());
                        while (true) {
                            String response = in.readUTF();
                            if (response.equals("END")) break;
                            System.out.println(response);
                        }
                        break;
                    case 4:
                        System.out.println("Enter doctor id: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println("Enter patient id: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println("Enter diagnosis: ");
                        out.writeUTF(sc.nextLine());
                        System.out.println(in.readUTF());
                        break;
                    case 5:
                        System.out.println("Exiting...");
                        return;
                    default:
                        System.out.println("Invalid choice!");

                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
