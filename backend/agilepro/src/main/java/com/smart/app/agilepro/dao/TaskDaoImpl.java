package com.smart.app.agilepro.dao;

import org.springframework.stereotype.Repository;

import java.util.List;

import com.smart.app.agilepro.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * TaskDaoImpl
 */
@Repository
public interface TaskDaoImpl extends JpaRepository<Task,Long> {

    @Query("Select task from Task task where task.storyId=:storyId")
    List<Task> findTasksByStoryId(@Param("storyId") Long storyId);
}