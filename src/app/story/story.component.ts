import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  tasks: Array<Task> = new Array();
  constructor(private route: ActivatedRoute,
              private router: Router, private userService: UserRegistrationService) { }

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

}
