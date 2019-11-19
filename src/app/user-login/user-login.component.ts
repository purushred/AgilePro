import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  constructor(private userRegistrationService: UserRegistrationService) { }

  ngOnInit() {
  }
  public loginUser() {
    this.userRegistrationService.loginUser(this.user);
  }
}
