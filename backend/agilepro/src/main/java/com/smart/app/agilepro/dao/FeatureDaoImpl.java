package com.smart.app.agilepro.dao;

import org.springframework.stereotype.Repository;

import java.util.List;

import com.smart.app.agilepro.model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * FeatureDaoImpl
 */
@Repository
public interface FeatureDaoImpl extends JpaRepository<Feature,Long> {

    @Query("Select feature from Feature feature where feature.projectId=:projectId")
    List<Feature> findFeaturesByProjectId(@Param("projectId") Long projectId);
}