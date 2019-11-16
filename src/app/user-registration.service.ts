import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  uri = 'http://localhost:8080/rest/registration';
  constructor(private http: HttpClient) { }

  registerUser(emailId, password) {
    const obj = {
      emailId,
      password
    };
    console.log('Posting registration request', obj);
    this.http.post(`${this.uri}`, obj).subscribe((res) => {
      console.log('Success response', res);
      }, (error) => {
      console.log('Error response', error);
      });
  }
}
