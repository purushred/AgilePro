import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  uri = '/rest/registration';
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
}
