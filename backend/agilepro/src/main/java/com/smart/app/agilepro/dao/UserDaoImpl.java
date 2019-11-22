package com.smart.app.agilepro.dao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.smart.app.agilepro.model.User;

@Repository
public interface UserDaoImpl extends CrudRepository<User,Long>{
    User findByEmailId(String emailId);
}