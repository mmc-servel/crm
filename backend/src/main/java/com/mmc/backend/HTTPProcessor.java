package com.mmc.backend;

import com.mmc.api.*;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.lang.reflect.InvocationTargetException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class HTTPProcessor implements HttpHandler {
    
    public static HashMap<String, String> sessionMap = new HashMap<String, String>();
    private int i = 0;

    @Override
    public void handle(HttpExchange t) {
        i++;
        String fileName = t.getRequestURI().toString();
        System.out.println("Start processing req:(" + i + ") " + fileName);
        if (fileName.startsWith("/api")) {
            processApi(t);
        } else {
            processReact(t);
        }
        System.out.println("End processing req:(" + i + ") " + fileName);
    }

    private void processApi(HttpExchange t) {
        try {
            //TO DO: t.getRequestMethod() return error in case of GET method
            sendResponce(t, HTTPApi.getProcessor(t).processRequest().getResponeString().toString().getBytes(), "application/json");
        }  catch (IOException | ClassNotFoundException | InstantiationException | IllegalAccessException | NoSuchMethodException | IllegalArgumentException | InvocationTargetException ex) {
            System.out.println("ERROR:(P1) "+ex.toString());
        }
    }

    private void sendResponce(HttpExchange t, byte[] msg, String contentType) throws IOException {
        OutputStream os = t.getResponseBody();
        if (contentType != null) {
            t.getResponseHeaders().put("Content-Type", Collections.singletonList(contentType));
        }
        t.sendResponseHeaders(200, msg.length);
        os.write(msg, 0, msg.length);
        os.close();
    }

    private void processReact(HttpExchange t) {
        try {
            String fileName = t.getRequestURI().toString();
            if (!fileName.startsWith("/static") && (!fileName.startsWith("/api"))) { //We process only "/static" (that comes from React) and "/api" all other GET rewuests are redirected to /index.html
                fileName = "/index.html";
            }

            fileName = "WEB-INF" + fileName.replace("/test", "");
            //String fileName = "WEB-INF/index.html";
            System.out.println("FileName=" + fileName);
            //-----------------------------------------
            InputStream is = MainClass.class.getClassLoader().getResourceAsStream(fileName);
            byte[] fileData = new byte[1024 * 1024];
            int nRead = 0;
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            while ((nRead = is.read(fileData, 0, fileData.length)) != -1) {

                bos.write(fileData, 0, nRead);
            }
            is.close();
            //-------------------------------------
            sendResponce(t, bos.toByteArray(), null);
        } catch (IOException eex) {
            String errorMessage = "Catched error: Check system log.";
            try {
                t.sendResponseHeaders(404, errorMessage.getBytes().length);
                OutputStream os = t.getResponseBody();
                os.write(errorMessage.getBytes());
                os.close();
            } catch (IOException eexx) {
                System.out.println("Error============" + eexx.getMessage()+" ThreadID"+Thread.currentThread().getId());
            }
            System.out.println("Error=" + eex.getMessage()+" ThreadName="+Thread.currentThread().getId());
        }
    }

}
