import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../service/user-registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserRegistrationService) { }

  ngOnInit() {
  }

  getProjects() {
    console.log('Projects:');
  }
}
