package com.smart.app.agilepro.dao;

import org.springframework.stereotype.Repository;

import com.smart.app.agilepro.model.Project;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * ProjectDaoImpl
 */
@Repository
public interface ProjectDaoImpl extends JpaRepository<Project,Long> {

    
}