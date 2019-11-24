import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  isShowAddTaskModal = false;
  task: Task = new Task();

  tasks: Array<Task> = new Array();
  constructor(private route: ActivatedRoute,
              private taskService: TaskService) { }

  ngOnInit() {
    const storyId = this.route.snapshot.paramMap.get('id');
    console.log('Feature Id', storyId);

    this.taskService.getTasks(storyId).subscribe((res) => {
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
    this.task.storyId = 100;
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
