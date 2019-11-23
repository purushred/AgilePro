import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { Feature } from '../feature';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  isShowAddFeatureModal = false;
  feature: Feature = new Feature();

  constructor(private route: ActivatedRoute,
              private router: Router, private userService: UserRegistrationService, private featureService: FeatureService) { }
features: Array<Feature> = new Array();
  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    console.log('Project Id', projectId);

    this.userService.getFeatures(projectId).subscribe((res) => {
      if (res) {
        this.features = res;
      } else {
        console.log('Could not get features');
      }
    }, (error) => {
      console.log('Unable to get features, Please try again.');
      console.log('Login Error response', error);
    });

  }

  showAddFeatureModal() {
    this.isShowAddFeatureModal = true;
  }

  createFeature() {
    this.feature.projectId = 100;
    this.featureService.createFeature(this.feature).subscribe((res) => {
      if (res) {
        this.features.push(res);
        this.isShowAddFeatureModal = false;
      } else {
        console.log('Could not create feature');
      }
    }, (error) => {
      console.log('Unable to create feature, Please try again.', error);
    });
  }
}
