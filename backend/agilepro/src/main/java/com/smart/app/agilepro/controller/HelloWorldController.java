package com.smart.app.agilepro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class HelloWorldController {

    @GetMapping(path="/hello",produces = "text/plain")
    public  String sayHello() {
        return "Welcome to Spring Boot";
    }
}