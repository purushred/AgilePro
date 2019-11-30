import { UserRegistrationService } from './../service/user-registration.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  userId: number;
  constructor(private projectService: ProjectService, private userService: UserRegistrationService) { }
  projects: Array<Project> = new Array();
  ngOnInit() {
    this.userId = this.userService.getLoggedInUser().id;
    this.projectService.getProjects(this.userId).subscribe((res) => {
      if (res) {
        this.projects = res;
      } else {
        console.log('Could not get projects');
      }
    }, (error) => {
      console.log('Get projects Error response', error);
    });
  }
}
