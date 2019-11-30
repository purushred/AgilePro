import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../model/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  featureUri = '/feature';
  featuresUri = '/features/';

  constructor(private http: HttpClient) { }

  createFeature(feature) {
    return this.http.post<Feature>(`${window.location.origin + this.featureUri}`, feature);
  }

  editFeature(feature) {
    return this.http.put<Feature>(`${window.location.origin + this.featureUri}`, feature);
  }

  deleteFeature(feature) {
    return this.http.delete<Feature>(`${window.location.origin + this.featureUri}`, feature);
  }

  getFeatures(projectId) {
    return this.http.get <Array<Feature>> (`${window.location.origin + this.featuresUri + projectId}`);
  }
}
