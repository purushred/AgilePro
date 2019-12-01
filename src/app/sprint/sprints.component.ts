import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html'
})
export class SprintsComponent implements OnInit {

  sprints: Array<Project> = [];

  constructor() { }

  ngOnInit() {
    this.sprints.push(new Project());
    this.sprints.push(new Project());
    this.sprints.push(new Project());
  }
}
