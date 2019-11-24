import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../service/user-registration.service';
import { Project } from '../model/project';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: string;
  constructor(private route: ActivatedRoute,
              private router: Router, private userService: UserRegistrationService) { }
  projects: Array<Project> = new Array();
  ngOnInit() {
    this.userId = this.route.snapshot
      .queryParamMap.get('userId');
      // .pipe(map(params => params.get('userId') || 'None'));

    // const projectId = this.route.snapshot.paramMap.get('id');
    console.log('Project Id', this.userId);

    this.userService.getProjects(100).subscribe((res) => {
      if (res) {
        this.projects = res;
      } else {
        console.log('Could not get projects');
      }
    }, (error) => {
      console.log('Unable to get projects, Please try again.');
      console.log('Login Error response', error);
    });

  }

}
