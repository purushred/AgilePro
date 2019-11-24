import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invitation } from '../model/invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  invitationUri = '/invite';
  constructor(private http: HttpClient) { }

  inviteUser(invitation) {
    return this.http.post<Invitation>(`${window.location.origin + this.invitationUri}`, invitation);
  }
}
