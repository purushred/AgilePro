package com.smart.app.agilepro.service;

import javax.annotation.Resource;

import com.smart.app.agilepro.dao.UserDaoImpl;
import com.smart.app.agilepro.model.User;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl {

    @Resource
    public UserDaoImpl userDaoImpl;
    
    public boolean registerUser(final User user) {
        User savedUser = userDaoImpl.save(user);
        return savedUser!=null;
    }
}