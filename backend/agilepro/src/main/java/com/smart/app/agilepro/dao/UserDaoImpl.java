package com.smart.app.agilepro.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart.app.agilepro.model.User;

@Repository
public interface UserDaoImpl extends JpaRepository<User,Long>{

}