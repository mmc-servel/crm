package com.mmc.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class Db {

    Connection conn;
    //TO DO: Use connection pooling.

    public String getSessionID(String username, String password) throws ClassNotFoundException, SQLException {
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

    public String getProductTable() throws ClassNotFoundException, SQLException {
        conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/user1", "user1", "user1");
        //PreparedStatement pstmt = conn.prepareStatement("SELECT product_id,name,description,category,mesure_unit,quantity,price,created_on,updated_on from products");
        PreparedStatement pstmt = conn.prepareStatement("SELECT name,description,quantity,price from products");
        ResultSet rs = pstmt.executeQuery();
        ResultSetMetaData rsmd = rs.getMetaData();
        String productTable = "";
        while (rs.next()) {
            String rowLine="";
            for (int i = 1; i <= rsmd.getColumnCount(); i++) {
                rowLine = rowLine + "\"" + rsmd.getColumnName(i) + "\":\"" + rs.getString(rsmd.getColumnName(i)) + "\",";
            }
            productTable = productTable + "{" + rowLine.substring(0, rowLine.length() - 1) + "},";
        }
        productTable = "[" + productTable.substring(0, productTable.length() - 1) + "]";
        conn.close();
        //System.out.println("productTable=" + productTable);
        return productTable;
    }
}
