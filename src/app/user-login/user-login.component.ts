import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../service/user-registration.service';
import { User } from '../model/user';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private userRegistrationService: UserRegistrationService) { }

  ngOnInit() {
  }
  public loginUser() {
    this.userRegistrationService.loginUser(this.user).subscribe((res) => {
      if (res) {
        sessionStorage.setItem('username', this.user.username);
        const tokenStr = 'Bearer ' + res['token'];
        sessionStorage.setItem('token', tokenStr);
        const navigationExtras: NavigationExtras = {
          queryParams: {userId: res.id}
        };
        this.router.navigate(['/dashboard/'], navigationExtras);
      } else {
        console.log('Invalid user credentials');
      }
    }, (error) => {
      console.log('Unable to login, Please try again.');
      console.log('Login Error response', error);
    });
  }
}
