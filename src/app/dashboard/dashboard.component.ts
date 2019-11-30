import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  userId: string;
  constructor(private route: ActivatedRoute,
              private projectService: ProjectService) { }
  projects: Array<Project> = new Array();
  ngOnInit() {
    this.userId = this.route.snapshot
      .queryParamMap.get('userId');
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
