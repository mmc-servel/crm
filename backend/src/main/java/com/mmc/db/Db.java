package com.mmc.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Db {

    Connection conn;
    //TO DO: Use connection pooling.

    public String getSessionID(String username,String password) throws ClassNotFoundException, SQLException {
        Class.forName("org.postgresql.Driver");
        conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/user1", "user1", "user1");
        PreparedStatement pstmt = conn.prepareStatement("SELECT gen_random_uuid() from accounts where email=? and pwd_hash=?");
        pstmt.setString(1, username);
        pstmt.setString(2, password);
        ResultSet rs = pstmt.executeQuery();
        String sessionID = null;
        if (rs.next()) {
            sessionID = rs.getString(1);
        }
        conn.close();
        return sessionID;
    }
}
