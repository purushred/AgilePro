package com.smart.app.agilepro.controller;

import java.util.List;

import com.smart.app.agilepro.model.Story;
import com.smart.app.agilepro.service.StoryServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * StoryController
 */

@RestController
public class StoryController {

    @Autowired
    public StoryServiceImpl storyServiceImpl;
    
    @PostMapping(path="/story", consumes="application/json")
    public Story createStory(@RequestBody Story story) {
        return storyServiceImpl.createStory(story);
    }

    @PutMapping(path="/story", consumes="application/json")
    public Story updateStory(@RequestBody Story story) {
        return storyServiceImpl.updateStory(story);
    }

    @DeleteMapping(path="/story/{id}")
    public void deleteStory(@PathVariable Long id){
        storyServiceImpl.deleteStory(id);
    }

    @GetMapping(path="/story/{id}")
    public Story getStory(@PathVariable Long id){
        return storyServiceImpl.getStory(id);
    }

    @GetMapping(path="/stories/{id}")
    public List<Story> getStorys(@PathVariable Long id){
        return storyServiceImpl.findStoriesByFeatureId(id);
    }
}