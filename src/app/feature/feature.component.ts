import { Component, OnInit } from '@angular/core';
import { Story } from '../model/story';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../service/story.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html'
})
export class FeatureComponent implements OnInit {

  isShowAddStoryModal = false;
  story: Story = new Story();
  stories: Array<Story> = new Array();
  featureId: string;
  constructor(private route: ActivatedRoute,
              private storyService: StoryService) { }

  ngOnInit() {
    this.featureId = this.route.snapshot.paramMap.get('id');
    console.log('Feature Id', this.featureId);

    this.storyService.getStories(this.featureId).subscribe((res) => {
      if (res) {
        this.stories = res;
      } else {
        console.log('Could not get stories');
      }
    }, (error) => {
      console.log('get stories Error response', error);
    });
  }


  showAddStoryModal() {
    this.isShowAddStoryModal = true;
  }

  createStory() {
    this.story.featureId = this.featureId as unknown as number;
    this.storyService.createStory(this.story).subscribe((res) => {
      if (res) {
        this.stories.push(res);
        this.isShowAddStoryModal = false;
      } else {
        console.log('Could not create story');
      }
    }, (error) => {
      console.log('Unable to create story, Please try again.', error);
    });
  }
}
