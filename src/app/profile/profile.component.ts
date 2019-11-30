import { Profile } from './../model/profile';
import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../service/user-registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();
  userId: number = this.userService.getLoggedInUser().id;
  constructor(private userService: UserRegistrationService) { }

  ngOnInit() {
    this.userId = this.userService.getLoggedInUser().id;
    this.getProfile(this.userId);
  }

  saveProfile() {
    this.profile.userId = this.userId;
    this.userService.postProfile(this.profile).subscribe((res) => {
      if (res) {
        this.profile = res;
        console.log('Profile Saved:', res);

      } else {
        console.log('Could not save profile');
      }
    }, (error) => {
      console.log('Unable to save profile, Please try again.', error);
    });
  }
  getProfile(userId) {
    this.userService.getProfile(userId).subscribe((res) => {
      if (res) {
        this.profile = res;
      } else {
        console.log('Could not get profile');
      }
    }, (error) => {
      console.log('Unable to get profile, Please try again.', error);
    });
  }
}
