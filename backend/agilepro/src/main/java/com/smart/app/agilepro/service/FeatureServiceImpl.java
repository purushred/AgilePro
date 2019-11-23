package com.smart.app.agilepro.service;

import java.util.List;

import javax.annotation.Resource;

import com.smart.app.agilepro.dao.FeatureDaoImpl;
import com.smart.app.agilepro.model.Feature;

import org.springframework.stereotype.Service;

@Service
public class FeatureServiceImpl {

    @Resource
    public FeatureDaoImpl featureDaoImpl;
    
    public Feature createFeature(final Feature feature) {
        return featureDaoImpl.save(feature);
    }
    public Feature updateFeature(final Feature feature) {
        return featureDaoImpl.save(feature);
    }
    public void deleteFeature(final Long id) {
        featureDaoImpl.delete(featureDaoImpl.getOne(id));
    }

    public Feature getFeature(Long id) {
        return featureDaoImpl.findAll().get(0);
    }

    public List<Feature> findFeaturesByProjectId(Long id) {
        return featureDaoImpl.findFeaturesByProjectId(id);
    }
}