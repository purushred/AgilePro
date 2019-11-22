import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { state } from '@angular/animations';
import { Project } from './project';
import { Feature } from './feature';
import { Story } from './story';
import { Task } from './task';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  registrationUri = '/register';
  loginUri = '/authenticate';
  projectsUri = '/projects/';
  featuresUri = '/features/';
  storiesUri = '/stories/';
  tasksUri = '/tasks/';
  constructor(private http: HttpClient, private router: Router, private location: PlatformLocation) { }

  loginUser(user) {
    return this.http.post<User>(`${window.location.origin + this.loginUri}`, user);
  }

  registerUser(userObj) {
    return this.http.post(`${window.location.origin + this.registrationUri}`, userObj);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
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
