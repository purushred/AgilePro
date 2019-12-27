package com.smart.app.agilepro.dao;

import org.springframework.stereotype.Repository;

import java.util.List;

import com.smart.app.agilepro.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * ProjectDaoImpl
 */
@Repository
public interface ProjectDaoImpl extends JpaRepository<Project,Long> {

    @Query("Select p from Project p where p.userId=:userId")
    List<Project> findProjectsByUserId(@Param("userId") Long userId);

    @Query("Select p from Project p where p.userId=:userId and p.projectId=:projectId")
    List<Project> getProjectByUserId(@Param("userId") Long userId, @Param("projectId") Long projectId);
}