import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

projects: Array<Project> = [];
  constructor(private userService: UserRegistrationService) {
   }

  ngOnInit() {
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
