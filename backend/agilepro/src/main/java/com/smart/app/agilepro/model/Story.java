package com.smart.app.agilepro.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "story")
public class Story {

    @Id
    @GeneratedValue(generator = "story_id_generator")
    @SequenceGenerator(
            name = "story_id_generator",
            sequenceName = "story_id_sequence",
            initialValue = 1
    )
    private Long storyId;
    private String name;
    private String description;
    private Long projectId;

    public Long getStoryId() {
        return storyId;
    }

    public void setStoryId(Long storyId) {
        this.storyId = storyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }
}