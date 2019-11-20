package com.smart.app.agilepro.controller;

import com.smart.app.agilepro.model.Project;
import com.smart.app.agilepro.service.ProjectServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * ProjectController
 */
@RestController("/rest")
public class ProjectController {

    @Autowired
    public ProjectServiceImpl projectServiceImpl;
    
    @PostMapping(name="/project", consumes="application/json")
    public void createProject(@RequestBody Project project){
        projectServiceImpl.createProject(project);
    }

    @PutMapping(name="/project", consumes="application/json")
    public void updateProject(@RequestBody Project project){
        projectServiceImpl.updateProject(project);
    }

    @DeleteMapping(name="/project", consumes="application/json")
    public void deleteProject(@RequestBody Project project){
        projectServiceImpl.deleteProject(project);
    }

    @GetMapping(name="/project", consumes="application/json")
    public Project getProject(@RequestBody Long id){
        return projectServiceImpl.getProject(id);
    }

    @GetMapping(name="/project", consumes="application/json")
    public Project getProjects(@RequestBody Long userId){
        return projectServiceImpl.getProject(userId);
    }
}