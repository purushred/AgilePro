import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { Story } from '../story';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  stories: Array<Story> = new Array();

  constructor(private route: ActivatedRoute,
              private router: Router, private userService: UserRegistrationService) { }

  ngOnInit() {
    const featureId = this.route.snapshot.paramMap.get('id');
    console.log('feature Id', featureId);

    this.userService.getStories(featureId).subscribe((res) => {
      if (res) {
        this.stories = res;
      } else {
        console.log('Could not get stories');
      }
    }, (error) => {
      console.log('Unable to get stories, Please try again.');
      console.log('Login Error response', error);
    });
  }

}
