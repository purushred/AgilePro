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
        User usr = userDaoImpl.findAll().stream()
                .filter(u -> u.getEmailId().equals(user.getEmailId()) 
        && u.getPassword().equals(user.getPassword())).findAny().orElse(null);
        System.out.println("USER:"+user);
        System.out.println("USER OBJ:"+usr.getEmailId()+":"+usr.getPassword());
        return usr;
    }
    public void saveUser(final User user) {
        userDaoImpl.save(user);
    }    
}