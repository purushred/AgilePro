import { Status } from './../model/status.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feature } from '../model/feature';
import { FeatureService } from '../service/feature.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  isShowAddFeatureModal = false;
  feature: Feature = new Feature();
  projectId: string;
  features: Array<Feature> = new Array();

  constructor(private route: ActivatedRoute,
              private featureService: FeatureService) {
              }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.featureService.getFeatures(this.projectId).subscribe((res) => {
      if (res) {
        this.features = res;
      } else {
        console.log('Could not get features');
      }
    }, (error) => {
      console.log('Get features Error response', error);
    });
  }

  showAddFeatureModal() {
    this.isShowAddFeatureModal = true;
  }

  /**
   * Create feature for the selected project.
   */
  createFeature() {
    this.feature.projectId = this.projectId as unknown as number;
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
