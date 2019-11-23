package com.smart.app.agilepro.controller;

import java.util.List;

import com.smart.app.agilepro.model.Task;
import com.smart.app.agilepro.service.TaskServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * TaskController
 */

@RestController
public class TaskController {

    @Autowired
    public TaskServiceImpl taskServiceImpl;
    
    @PostMapping(path="/task", consumes="application/json")
    public Task createTask(@RequestBody Task task) {
        return taskServiceImpl.createTask(task);
    }

    @PutMapping(path="/task", consumes="application/json")
    public Task updateTask(@RequestBody Task task) {
        return taskServiceImpl.updateTask(task);
    }

    @DeleteMapping(path="/task/{id}")
    public void deleteTask(@PathVariable Long id){
        taskServiceImpl.deleteTask(id);
    }

    @GetMapping(path="/task/{id}")
    public Task getTask(@PathVariable Long id){
        return taskServiceImpl.getTask(id);
    }

    @GetMapping(path="/tasks/{id}")
    public List<Task> getTasks(@PathVariable Long id){
        return taskServiceImpl.findTasksByStoryId(id);
    }
}