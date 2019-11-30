import { Injectable } from '@angular/core';
import { Story } from '../model/story';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyUri = '/story';
  storiesUri = '/stories/';

  constructor(private http: HttpClient) { }

  createStory(story) {
    return this.http.post<Story>(`${window.location.origin + this.storyUri}`, story);
  }

  editStory(story) {
    return this.http.put<Story>(`${window.location.origin + this.storyUri}`, story);
  }

  deleteStory(story) {
    return this.http.delete<Story>(`${window.location.origin + this.storyUri}`, story);
  }

  getStories(featureId) {
    return this.http.get <Array<Story>> (`${window.location.origin + this.storiesUri + featureId}`);
  }
}
