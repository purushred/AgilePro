import { Status } from '../model/status.enum';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html'
})
export class StoryComponent implements OnInit {

  isShowAddTaskModal = false;
  task: Task = new Task();
  storyId: string;
  statusValues = [];
  tasks: Array<Task> = new Array();
  constructor(private route: ActivatedRoute,
              private taskService: TaskService) {
                this.statusValues = Object.values(Status);
               }

  ngOnInit() {
    this.storyId = this.route.snapshot.paramMap.get('id');
    this.taskService.getTasks(this.storyId).subscribe((res) => {
      if (res) {
        this.tasks = res;
      } else {
        console.log('Could not get tasks');
      }
    }, (error) => {
      console.log('Tasks Error response', error);
    });
  }

  showAddTaskModal() {
    this.isShowAddTaskModal = true;
  }

  createTask() {
    this.task.storyId = this.storyId as unknown as number;
    this.taskService.createTask(this.task).subscribe((res) => {
      if (res) {
        this.tasks.push(res);
        this.isShowAddTaskModal = false;
      } else {
        console.log('Could not create task');
      }
    }, (error) => {
      console.log('Unable to create task, Please try again.', error);
    });
  }
}
