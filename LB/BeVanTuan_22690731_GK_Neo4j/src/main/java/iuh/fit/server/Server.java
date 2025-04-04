package iuh.fit.server;

import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(0731)) {
            System.out.println("Server is running on port 7551");
            while (true) {
                Socket socket = serverSocket.accept();
                System.out.println(socket.getPort());
                System.out.println(socket.getInetAddress().getHostAddress());
                Thread t = new Thread(new ClientHandle(socket));
                t.start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
