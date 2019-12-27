package com.smart.app.agilepro.dao;
import com.smart.app.agilepro.entity.Profile;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProfileDaoImpl extends CrudRepository<Profile,Long>{
}