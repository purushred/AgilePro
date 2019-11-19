package com.smart.app.agilepro.controller;

import com.smart.app.agilepro.model.User;
import com.smart.app.agilepro.service.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class UserController {

    @Autowired
    public UserServiceImpl userService;

    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public User loginUser(@RequestBody User user) {
        System.out.println("Login Request"+user.getEmailId()+":"+user.getPassword());
        return userService.loginUser(user);
    }

    @PostMapping(path = "/registration", consumes = "application/json", produces = "application/json")
    public boolean registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }
}