import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  registrationUri = '/register';
  loginUri = '/authenticate';

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post<User>(`${window.location.origin + this.loginUri}`, user);
  }

  registerUser(user) {
    return this.http.post(`${window.location.origin + this.registrationUri}`, user);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
