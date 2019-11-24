import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectUri = '/project';

  constructor(private http: HttpClient, private router: Router, private location: PlatformLocation) { }

  createProject(project) {
    return this.http.post<Project>(`${window.location.origin + this.projectUri}`, project);
  }
}
