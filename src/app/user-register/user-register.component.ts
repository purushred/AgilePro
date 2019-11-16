import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userRegistrationService: UserRegistrationService) { }

  ngOnInit() {
  }
  registerUser(email, password) {
    this.userRegistrationService.registerUser(email, password);
    console.log('Register user clicked', email, password);
  }
}
