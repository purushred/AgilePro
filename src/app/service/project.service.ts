import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectUri = '/project';
  projectsUri = '/projects/';
  constructor(private http: HttpClient) { }

  createProject(project) {
    return this.http.post<Project>(`${window.location.origin + this.projectUri}`, project);
  }

  getProjects(userId) {
    return this.http.get<Array<Project>>(`${window.location.origin + this.projectsUri + userId}`);
  }
}
