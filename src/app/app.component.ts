import { Component } from '@angular/core';
import { UserRegistrationService } from './service/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'AgilePro';
  isHomeSelected = true;
  isTrackSelected = false;
  isProjectsSelected = false;
  isSettingsSelected = false;
  collapsed = false;
  constructor(private router: Router, public loginService: UserRegistrationService) {}

  userLogout() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

  handleHomeClick() {
    this.isHomeSelected = true;
    this.isTrackSelected = false;
    this.isProjectsSelected = false;
    this.isSettingsSelected = false;
  }
  handleTrackClick() {
    this.isHomeSelected = false;
    this.isTrackSelected = true;
    this.isProjectsSelected = false;
    this.isSettingsSelected = false;
    this.router.navigate(['/sprint']);
  }
  handleProjectsClick() {
    this.isHomeSelected = false;
    this.isTrackSelected = false;
    this.isProjectsSelected = true;
    this.isSettingsSelected = false;
  }
  handleSettingsClick() {
    this.isHomeSelected = false;
    this.isTrackSelected = false;
    this.isProjectsSelected = false;
    this.isSettingsSelected = true;
    this.router.navigate(['/profile']);
  }
}

