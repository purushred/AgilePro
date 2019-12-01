import { JwtResponse } from './../model/jwt-response';
import { Status } from './../model/status.enum';
import { User } from '../model/user';
import { UserRegistrationService } from '../service/user-registration.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  project: Project = new Project();
  projects: Array<Project> = [];
  loggedInUser: JwtResponse = new JwtResponse();
  statusValues = [];
  selected = false;

  constructor(private projectService: ProjectService, private userService: UserRegistrationService) {
    this.statusValues = Object.values(Status);
  }
  isShowAddProjectModal = false;
  ngOnInit() {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.projectService.getProjects(this.loggedInUser.id).subscribe((res) => {
      if (res) {
        this.projects = res;
      } else {
        console.log('Could not get projects');
      }
    }, (error) => {
      console.log('Login Error response', error);
    });
  }

  showAddProjectModal() {
    this.isShowAddProjectModal = true;
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
