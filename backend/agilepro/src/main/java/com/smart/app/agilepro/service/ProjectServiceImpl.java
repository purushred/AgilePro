package com.smart.app.agilepro.service;

import javax.annotation.Resource;

import com.smart.app.agilepro.dao.ProjectDaoImpl;
import com.smart.app.agilepro.model.Project;

import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl {

    @Resource
    public ProjectDaoImpl projecDaoImpl;
    
    public void createProject(final Project project) {
        projecDaoImpl.save(project);
    }
    public void updateProject(final Project project) {
        projecDaoImpl.save(project);
    }
    public void deleteProject(final Project project) {
        projecDaoImpl.delete(project);
    }

    public Project getProject(Long id) {
        return projecDaoImpl.getOne(id);
    }
}