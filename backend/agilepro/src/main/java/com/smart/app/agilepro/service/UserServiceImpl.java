package com.smart.app.agilepro.service;

import java.util.List;
import java.util.stream.Collectors;

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
        return savedUser != null;
    }

    public User loginUser(final User user) {
        return userDaoImpl.findAll().stream()
                .filter(u -> u.getEmailId().equals(user.getEmailId()) 
        && u.getPassword().equals(user.getPassword())).findAny().orElse(null);
    }
    public void saveUser(final User user) {
        userDaoImpl.save(user);
    }    
}