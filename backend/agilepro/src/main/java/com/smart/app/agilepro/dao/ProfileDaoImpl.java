package com.smart.app.agilepro.dao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.smart.app.agilepro.model.Profile;

@Repository
public interface ProfileDaoImpl extends CrudRepository<Profile,Long>{
}