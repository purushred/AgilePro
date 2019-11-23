package com.smart.app.agilepro.controller;

import java.util.List;

import com.smart.app.agilepro.model.Project;
import com.smart.app.agilepro.service.ProjectServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * ProjectController
 */

@RestController
public class ProjectController {

    @Autowired
    public ProjectServiceImpl projectServiceImpl;
    
    @PostMapping(path="/project", consumes="application/json")
    public Project createProject(@RequestBody Project project){
        return projectServiceImpl.createProject(project);
    }

    @PutMapping(path="/project", consumes="application/json")
    public void updateProject(@RequestBody Project project){
        projectServiceImpl.updateProject(project);
    }

    @DeleteMapping(path="/project/{id}")
    public void deleteProject(@PathVariable Long id){
        projectServiceImpl.deleteProject(id);
    }

    @GetMapping(path="/project/{id}")
    public Project getProject(@PathVariable Long id){
        return projectServiceImpl.getProject(id);
    }

    @GetMapping(path="/projects/{id}")
    public List<Project> getProjects(@PathVariable Long id){
        return projectServiceImpl.findProjectsByUserId(id);
    }
}