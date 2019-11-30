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
  user: User = new User();
  constructor(private projectService: ProjectService, private userService: UserRegistrationService) {
  }
  isShowAddProjectModal = false;
  ngOnInit() {
    this.user = this.userService.getLoggedInUser();
    this.projectService.getProjects(this.user.id).subscribe((res) => {
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
    this.project.userId = this.user.id;
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
