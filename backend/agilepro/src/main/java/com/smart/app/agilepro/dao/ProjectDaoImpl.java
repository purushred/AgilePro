package com.smart.app.agilepro.dao;

import org.springframework.stereotype.Repository;

import java.util.List;

import com.smart.app.agilepro.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * ProjectDaoImpl
 */
@Repository
public interface ProjectDaoImpl extends JpaRepository<Project,Long> {

    @Query("Select project from Project project where project.userId=:userId")
    List<Project> findProjectsByUserId(@Param("userId") Long userId);
}