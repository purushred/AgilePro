import { JwtResponse } from './../model/jwt-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  registrationUri = '/register';
  loginUri = '/authenticate';

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
}
