package com.smart.app.agilepro.dao;

import org.springframework.stereotype.Repository;

import java.util.List;

import com.smart.app.agilepro.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * StoryDaoImpl
 */
@Repository
public interface StoryDaoImpl extends JpaRepository<Story,Long> {

    @Query("Select story from Story story where story.featureId=:featureId")
    List<Story> findStoriesByFeatureId(@Param("featureId") Long featureId);
}