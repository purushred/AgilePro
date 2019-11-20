import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Project } from '../project';
import { UserRegistrationService } from '../user-registration.service';
import { Feature } from '../feature';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router, private userService: UserRegistrationService) { }
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

}
