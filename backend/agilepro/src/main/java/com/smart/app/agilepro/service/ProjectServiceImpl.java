package com.smart.app.agilepro.service;

import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;

import com.smart.app.agilepro.dao.ProjectDaoImpl;
import com.smart.app.agilepro.entity.Project;

import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl {

    @Resource
    public ProjectDaoImpl projecDaoImpl;

    public Project createProject(final Project project) {
        return projecDaoImpl.save(project);
    }

    public void updateProject(final Project project) {
        projecDaoImpl.save(project);
    }

    public void deleteProject(final Long id) {
        projecDaoImpl.delete(projecDaoImpl.getOne(id));
    }

    public Project getProject(Long id) {
        return projecDaoImpl.findAll().get(0);
    }

    public List<Project> findProjectsByUserId(Long id) {
        return projecDaoImpl.findProjectsByUserId(id);
    }

    public Project getProjectByUserIdAndProjectId(Long userId, Long projectId) {
        Optional<Project> project = projecDaoImpl.getProjectByUserId(userId, projectId).stream().findFirst();
        return project.isPresent() ? project.get() : null;
    }
}