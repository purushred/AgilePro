package com.smart.app.agilepro.controller;

import java.util.Optional;

import com.smart.app.agilepro.model.Invitation;
import com.smart.app.agilepro.model.JwtRequest;
import com.smart.app.agilepro.model.JwtResponse;
import com.smart.app.agilepro.model.Profile;
import com.smart.app.agilepro.model.User;
import com.smart.app.agilepro.model.UserDTO;
import com.smart.app.agilepro.security.JwtTokenUtil;
import com.smart.app.agilepro.security.JwtUserDetailsService;
import com.smart.app.agilepro.service.EmailServiceImpl;
import com.smart.app.agilepro.service.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private EmailServiceImpl emailServiceImpl;

    @Autowired
    private UserServiceImpl userServiceImpl;

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        final String username = authenticationRequest.getUsername();
        final String password = authenticationRequest.getPassword();
        authenticate(username, password);
        final UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        final String token = jwtTokenUtil.generateToken(userDetails);
        User user = userServiceImpl.getUserByName(username);
        return ResponseEntity.ok(new JwtResponse(user.getId(), token, userDetails.getUsername(), "Admin"));
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
        User savedUser = userDetailsService.save(user);
        if (savedUser != null) {
            // emailServiceImpl.sendMail(user.getUsername(), "Please click <a
            // href='http://localhost:8080'>" + "here" + "</a> to confirm your email.");
        }
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping(value = "/profile")
    public Profile saveProfile(@RequestBody Profile profile) throws Exception {
        return userDetailsService.saveProfile(profile);
    }

    @GetMapping(path = "/profile/{userId}")
    public Profile getProfile(@PathVariable Long userId) throws Exception {
        Optional<Profile> optionalProfile = userDetailsService.getProfile(userId);
        return optionalProfile.isPresent() ? optionalProfile.get(): null;
    }

    @PostMapping(value="/invite")
    public void inviteUser(@RequestBody Invitation invitation) {
        emailServiceImpl.sendMail(invitation.getEmailId(), invitation.getInvitationMessage());
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}