package com.smart.app.agilepro.service;

import java.util.List;

import javax.annotation.Resource;

import com.smart.app.agilepro.dao.TaskDaoImpl;
import com.smart.app.agilepro.model.Task;

import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl {

    @Resource
    public TaskDaoImpl taskDaoImpl;
    
    public void createTask(final Task task) {
        taskDaoImpl.save(task);
    }
    public void updateTask(final Task task) {
        taskDaoImpl.save(task);
    }
    public void deleteTask(final Long id) {
        taskDaoImpl.delete(taskDaoImpl.getOne(id));
    }

    public Task getTask(Long id) {
        return taskDaoImpl.findAll().get(0);
    }

    public List<Task> findTasksByStoryId(Long id) {
        return taskDaoImpl.findTasksByStoryId(id);
    }
}