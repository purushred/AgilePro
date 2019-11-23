import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { Story } from '../story';
import { TaskService } from '../task.service';

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
              private router: Router, private userService: UserRegistrationService, private taskService: TaskService) { }

  ngOnInit() {
    const storyId = this.route.snapshot.paramMap.get('id');
    console.log('Feature Id', storyId);

    this.userService.getTasks(storyId).subscribe((res) => {
      if (res) {
        this.tasks = res;
      } else {
        console.log('Could not get tasks');
      }
    }, (error) => {
      console.log('Unable to get tasks, Please try again.');
      console.log('Login Error response', error);
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
