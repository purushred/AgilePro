package com.smart.app.agilepro.security;

import java.util.ArrayList;

import com.smart.app.agilepro.dao.UserDaoImpl;
import com.smart.app.agilepro.model.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private UserDaoImpl userDaoImpl;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.smart.app.agilepro.model.User user = userDaoImpl.findByEmailId(username);
		if(user==null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new User(user.getEmailId(),user.getPassword(), new ArrayList<>());
	}

	public com.smart.app.agilepro.model.User save(UserDTO user) {
		com.smart.app.agilepro.model.User newUser = new com.smart.app.agilepro.model.User();
		newUser.setEmailId(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDaoImpl.save(newUser);
	}
}