package com.smart.app.agilepro.model;

import java.io.Serializable;

public class JwtResponse implements Serializable {
    private static final long serialVersionUID = -8091879091924046844L;
    private final Long id;
    private final String jwttoken;
    private final String userName;
    private final String role;
    public JwtResponse(Long id, String jwttoken, String userName, String role) {
        this.id = id;
        this.jwttoken = jwttoken;
        this.userName = userName;
        this.role = role;
    }

    public String getToken() {
        return this.jwttoken;
    }

    public String getUserName() {
        return userName;
    }

    public String getRole() {
        return role;
    }
    public Long getId() {
        return id;
    }
}