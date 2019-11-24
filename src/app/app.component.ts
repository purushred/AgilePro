import { Component } from '@angular/core';
import { UserRegistrationService } from './service/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgilePro';
  constructor(private router: Router, private loginService: UserRegistrationService) {}

  userLogout() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }
}

