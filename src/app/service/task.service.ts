import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskUri = '/task';

  constructor(private http: HttpClient, private router: Router, private location: PlatformLocation) { }

  createTask(task) {
    return this.http.post<Task>(`${window.location.origin + this.taskUri}`, task);
  }
}
