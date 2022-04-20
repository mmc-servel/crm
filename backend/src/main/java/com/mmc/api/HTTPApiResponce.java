package com.mmc.api;
import org.json.*;
public class HTTPApiResponce {

    JSONObject responce;

    public HTTPApiResponce(String status, String message, String data) {
        try {
            responce = new JSONObject("{\"responce\":\""+status+"\",\"message\":\""+message+"\",\"data\":"+data+"}");
        } catch (JSONException ee) {
            System.out.println("ERROR: Error converting request body to JSON. " + ee.getMessage());
        }            
    }

    public JSONObject getResponeString() {  
        System.out.println("    ResponceJSON="+responce);
        return responce;
    }
}