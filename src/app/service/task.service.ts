import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskUri = '/task';
  tasksUri = '/tasks/';
  constructor(private http: HttpClient) { }

  createTask(task) {
    return this.http.post<Task>(`${window.location.origin + this.taskUri}`, task);
  }

  getTasks(storyId) {
    return this.http.get <Array<Task>> (`${window.location.origin + this.tasksUri + storyId}`);
  }
}
