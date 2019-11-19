package com.smart.app.agilepro.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "feature")
public class Feature {

    @Id
    @GeneratedValue(generator = "feature_id_generator")
    @SequenceGenerator(
            name = "feature_id_generator",
            sequenceName = "feature_id_sequence",
            initialValue = 1
    )
    private Long featureId;
    private String name;
    private String description;

    public Long getFeatureId() {
        return featureId;
    }

    public void setFeatureId(Long featureId) {
        this.featureId = featureId;
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
    
}