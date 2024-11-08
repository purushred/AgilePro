package com.smart.app.agilepro.service;

import java.util.List;

import javax.annotation.Resource;

import com.smart.app.agilepro.dao.StoryDaoImpl;
import com.smart.app.agilepro.model.Story;

import org.springframework.stereotype.Service;

@Service
public class StoryServiceImpl {

    @Resource
    public StoryDaoImpl storyDaoImpl;
    
    public Story createStory(final Story story) {
        return storyDaoImpl.save(story);
    }
    public Story updateStory(final Story story) {
        return storyDaoImpl.save(story);
    }
    public void deleteStory(final Long id) {
        storyDaoImpl.delete(storyDaoImpl.getOne(id));
    }

    public Story getStory(Long id) {
        return storyDaoImpl.findAll().get(0);
    }

    public List<Story> findStoriesByFeatureId(Long id) {
        return storyDaoImpl.findStoriesByFeatureId(id);
    }
}