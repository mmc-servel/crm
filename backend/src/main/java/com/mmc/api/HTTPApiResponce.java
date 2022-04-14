package com.mmc.api;

public class HTTPApiResponce {

    String responce;

    public HTTPApiResponce(String status, String message, String data) {
        responce = "{\"status\":\"" + status + "\",\"message\":\"" + message + "\",\"data\":" + data + "}";
    }

    public String getResponeString() {
        return responce;
    }
}