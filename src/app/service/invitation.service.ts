import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invitation } from '../model/invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  invitationUri = '/invites';
  constructor(private http: HttpClient) { }

  inviteUser(invitation: Invitation) {
    return this.http.post<Invitation>(`${window.location.origin + this.invitationUri}`, invitation);
  }
  inviteUsers(invitations: Invitation[]) {
    return this.http.post<Array<Invitation>>(`${window.location.origin + this.invitationUri}`, invitations);
  }
}
