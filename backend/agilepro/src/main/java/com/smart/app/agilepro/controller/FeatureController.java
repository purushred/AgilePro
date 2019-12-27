package com.smart.app.agilepro.controller;

import java.util.List;

import com.smart.app.agilepro.entity.Feature;
import com.smart.app.agilepro.service.FeatureServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * FeatureController
 */

@RestController
public class FeatureController {

    @Autowired
    public FeatureServiceImpl featureServiceImpl;
    
    @PostMapping(path="/feature", consumes="application/json")
    public Feature createFeature(@RequestBody Feature feature) {
        return featureServiceImpl.createFeature(feature);
    }

    @PutMapping(path="/feature", consumes="application/json")
    public Feature updateFeature(@RequestBody Feature feature) {
        return featureServiceImpl.updateFeature(feature);
    }

    @DeleteMapping(path="/feature/{id}")
    public void deleteFeature(@PathVariable Long id){
        featureServiceImpl.deleteFeature(id);
    }

    @GetMapping(path="/feature/{id}")
    public Feature getFeature(@PathVariable Long id){
        return featureServiceImpl.getFeature(id);
    }

    @GetMapping(path="/features/{id}")
    public List<Feature> getFeatures(@PathVariable Long id){
        return featureServiceImpl.findFeaturesByProjectId(id);
    }
}