import { Injectable } from '@angular/core';
import { Story } from './story';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyUri = '/story';

  constructor(private http: HttpClient, private router: Router, private location: PlatformLocation) { }

  createStory(story) {
    return this.http.post<Story>(`${window.location.origin + this.storyUri}`, story);
  }
}
