
package com.mmc.login;

import com.mmc.api.AAPIProcessor;
import com.mmc.api.HTTPApiResponce;
import com.mmc.backend.HTTPProcessor;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

public class Login extends AAPIProcessor {

    public Login(HttpExchange t) {
        super(t);
    }

    @Override
    public HTTPApiResponce processRequest() throws UnsupportedEncodingException, IOException{
        System.out.println("  Body request: " + getrequestBodyString()); 
        HTTPProcessor.sessionMap.put("aaaaa", "vvvvv");
        return new HTTPApiResponce("OK","The user HELLO login succesfull.","{\"sesionid\":\"sdjhfdsjhfkjdshkjdshf\"}");
    }

}
