import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { state } from '@angular/animations';
import { Project } from './project';
import { Feature } from './feature';
import { Story } from './story';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  uri = '/rest/registration';
  loginUri = '/rest/login';
  projectsUri = '/projects/';
  featuresUri = '/features/';
  storiesUri = '/stories/';
  tasksUri = '/tasks/';
  constructor(private http: HttpClient, private router: Router, private location: PlatformLocation) { }

  registerUser(emailId, password) {
    const obj = {
      emailId,
      password
    };
    this.http.post(`${window.location.origin + this.uri}`, obj).subscribe((res) => {
      console.log('Success response', res);
    }, (error) => {
      console.log('Error response', error);
    });
  }

  loginUser(user) {
    this.http.post(`${window.location.origin + this.loginUri}`, user).subscribe((res) => {
      if (res) {
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Invalid user credentials');
      }
    }, (error) => {
      console.log('Unable to login, Please try again.');
      console.log('Login Error response', error);
    });
  }

  getProjects(userId) {
    return this.http.get <Array<Project>> (`${window.location.origin + this.projectsUri + userId}`);
  }

  getFeatures(projectId) {
    return this.http.get <Array<Feature>> (`${window.location.origin + this.featuresUri + projectId}`);
  }
  getStories(featureId) {
    return this.http.get <Array<Story>> (`${window.location.origin + this.storiesUri + featureId}`);
  }

  getTasks(storyId) {
    return this.http.get <Array<Task>> (`${window.location.origin + this.tasksUri + storyId}`);
  }

}
