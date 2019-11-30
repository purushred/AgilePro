import { Profile } from './../model/profile';
import { JwtResponse } from './../model/jwt-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  registrationUri = '/register';
  loginUri = '/authenticate';
  profileUri = '/profile';

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post<JwtResponse>(`${window.location.origin + this.loginUri}`, user);
  }

  registerUser(user) {
    return this.http.post(`${window.location.origin + this.registrationUri}`, user);
  }

  getLoggedInUser() {
    return  (JSON.parse(sessionStorage.getItem('currentUser'))) as User;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('currentUser');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
  }

  getProfile(userId) {
    return this.http.get<Profile>(`${window.location.origin + this.profileUri}` + '/' + userId);
  }

  postProfile(profile) {
    return this.http.post<Profile>(`${window.location.origin + this.profileUri}`, profile);
  }
}
