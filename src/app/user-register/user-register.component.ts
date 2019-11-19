import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public emailId: string;
  public password: string;
  constructor(private userRegistrationService: UserRegistrationService) { }

  ngOnInit() {
  }
  registerUser() {
    this.userRegistrationService.registerUser(this.emailId, this.password);
    console.log('Register user clicked', this.emailId, this.password);
  }
}
