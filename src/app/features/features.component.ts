import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Story } from '../model/story';
import { StoryService } from '../service/story.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  stories: Array<Story> = new Array();

  constructor(private route: ActivatedRoute,
              private router: Router, private storyService: StoryService) { }

  ngOnInit() {
    const featureId = this.route.snapshot.paramMap.get('id');
    console.log('feature Id', featureId);

    this.storyService.getStories(featureId).subscribe((res) => {
      if (res) {
        this.stories = res;
      } else {
        console.log('Could not get stories');
      }
    }, (error) => {
      console.log('Get stories Error response', error);
    });
  }

}
