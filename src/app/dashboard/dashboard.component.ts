import { Router } from '@angular/router';
import { JwtResponse } from './../model/jwt-response';
import { UserRegistrationService } from './../service/user-registration.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private projectService: ProjectService, private userService: UserRegistrationService, private router: Router) { }
  projects: Array<Project> = new Array();
  isShowAddProjectModal = false;
  project: Project = new Project();
  loggedInUser: JwtResponse = new JwtResponse();

  ngOnInit() {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.projectService.getProjects(this.loggedInUser.id).subscribe((res) => {
      if (res) {
        this.projects = res;
      } else {
        console.log('Could not get projects');
      }
    }, (error) => {
      console.log('Get projects Error response', error);
    });
  }

  showAddProjectModal() {
    this.isShowAddProjectModal = true;
  }

  navigateToProject(projectId) {
    this.router.navigate(['/project/' + projectId]);
    console.log('Navigating to the project.', projectId);
  }
  createProject() {
    this.project.userId = this.loggedInUser.id;
    this.projectService.createProject(this.project).subscribe((res) => {
      if (res) {
        this.projects.push(res);
        this.isShowAddProjectModal = false;
      } else {
        console.log('Could not create project');
      }
    }, (error) => {
      console.log('Unable to create project, Please try again.', error);
    });
  }

}
