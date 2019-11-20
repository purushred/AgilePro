import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  stories: Array<Story> = new Array();
  constructor(private route: ActivatedRoute,
              private router: Router, private userService: UserRegistrationService) { }

  ngOnInit() {
    const featureId = this.route.snapshot.paramMap.get('id');
    console.log('Feature Id', featureId);

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
