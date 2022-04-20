package com.mmc.login;

import com.mmc.api.AAPIProcessor;
import com.mmc.api.HTTPApiResponce;
import com.mmc.backend.HTTPProcessor;
import com.mmc.db.Db;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.*;

public class Login extends AAPIProcessor {

    public Login(HttpExchange t) {
        super(t);
    }

    @Override
    public HTTPApiResponce processRequest() throws UnsupportedEncodingException, IOException {
        String sessionID;
        try {
            JSONObject reqJsonObj= getrequestBodyString();
            HTTPProcessor.sessionMap.put("aaaaa", "vvvvv");
            Db db = new Db();
            sessionID = db.getSessionID(reqJsonObj.getString("username"),reqJsonObj.getString("password"));
            if (sessionID == null) {
                return new HTTPApiResponce("ERROR", "Invalid user/password.", "{}");
            }
            return new HTTPApiResponce("OK", "Login success.", "{\"sesionid\":\""+sessionID+"\"}");
        } catch (ClassNotFoundException | SQLException ex) {
            System.out.println("ERROR: " + ex.getMessage());
            return new HTTPApiResponce("ERROR", "Login failed. Check server logs.", "{}");
        }
    }

}
