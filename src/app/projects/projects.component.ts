import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project = new Project();
  projects: Array<Project> = [];
  constructor(private projectService: ProjectService) {
  }
  isShowAddProjectModal = false;
  ngOnInit() {
    this.projectService.getProjects(100).subscribe((res) => {
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
    this.project.userId = 100;
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
