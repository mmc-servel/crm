package com.mmc.api;

import com.sun.net.httpserver.HttpExchange;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import org.json.*;

public abstract class AAPIProcessor {

    private final HttpExchange t;

    public AAPIProcessor(HttpExchange t) {
        this.t = t;
    }

    abstract public HTTPApiResponce processRequest() throws UnsupportedEncodingException, IOException;

    protected JSONObject getrequestBodyString() throws UnsupportedEncodingException, IOException {
        InputStreamReader isr = new InputStreamReader(t.getRequestBody(), "utf-8");
        BufferedReader br = new BufferedReader(isr);
        int b;
        StringBuilder buf = new StringBuilder(10000);
        while ((b = br.read()) != -1) {
            buf.append((char) b);
        }
        br.close();
        isr.close();
        JSONObject reqJsonObj = null;
        try {
            reqJsonObj = new JSONObject(buf.toString());
            System.out.println("    RequestJSON="+reqJsonObj.toString());
        } catch (JSONException ee) {
            System.out.println("ERROR: Error converting request body to JSON. " + ee.getMessage());
        }
        return reqJsonObj;
    }
}
