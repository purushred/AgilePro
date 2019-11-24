import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../service/user-registration.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private userRegistrationService: UserRegistrationService) { }

  ngOnInit() {
  }
  registerUser() {
    this.userRegistrationService.registerUser(this.user).subscribe((res) => {
      this.router.navigate(['/verify']);
      return res;
    }, (error) => {
      console.log('Error response', error);
    });
  }
}
