package com.mmc.backend;

import java.io.InputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import com.sun.net.httpserver.HttpServer;

public class MainClass {

    public static void main(String[] args) throws IOException {

         //just check if index file exists
        InputStream is = MainClass.class.getClassLoader().getResourceAsStream("WEB-INF/index.html");
        if (is == null) {
            System.out.println("Error: InputStream is null");
            return;
        } else {
            is.close();
        }

        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", new HTTPProcessor());
        server.setExecutor(null); // creates a default executor      
        server.start();

        System.out.println("------END OF MAIN------");       
    }

}
