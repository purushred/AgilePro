package com.smart.app.agilepro.service;

import javax.annotation.Resource;

import com.smart.app.agilepro.dao.UserDaoImpl;
import com.smart.app.agilepro.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl {

    @Autowired
    private JavaMailSender javaMailSender;
    
    @Resource
    public UserDaoImpl userDaoImpl;

    public boolean registerUser(final User user) {
        User savedUser = userDaoImpl.save(user);
        sendEmail();
        return savedUser != null;
    }

    void sendEmail() {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("purushred@gmail.com", "psham81@gmail.com");

        msg.setSubject("Testing from Spring Boot");
        msg.setText("Hello World \n Spring Boot Email");

        javaMailSender.send(msg);

    }

    public User getUserByName(String userName){
        return userDaoImpl.findByEmailId(userName);
    }
    public void saveUser(final User user) {
        userDaoImpl.save(user);
    }    
}