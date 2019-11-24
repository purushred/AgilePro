import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { Feature } from '../model/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  featureUri = '/feature';

  constructor(private http: HttpClient, private router: Router, private location: PlatformLocation) { }

  createFeature(feature) {
    return this.http.post<Feature>(`${window.location.origin + this.featureUri}`, feature);
  }
}
