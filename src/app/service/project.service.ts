import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectUri = '/project/';
  private projectsUri = '/projects/';

  constructor(private http: HttpClient) { }

  createProject(project: Project) {
    return this.http.post<Project>(`${window.location.origin + this.projectUri}`, project);
  }

  editProject(project: Project) {
    return this.http.put<Project>(`${window.location.origin + this.projectUri}`, project);
  }

  deleteProject(project) {
    return this.http.delete<Project>(`${window.location.origin + this.projectUri}`, project);
  }

  getProject(userId, projectId) {
    return this.http.get<Project>(`${window.location.origin + this.projectUri + userId + '/' + projectId}`);
  }

  getProjects(userId: number) {
    return this.http.get<Array<Project>>(`${window.location.origin + this.projectsUri + userId}`);
  }
}
