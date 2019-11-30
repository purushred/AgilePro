import { Component, OnInit } from '@angular/core';
import { Invitation } from '../model/invitation';
import { InvitationService } from '../service/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html'
})
export class InvitationComponent implements OnInit {

  invitation: Invitation = new Invitation();
  options = '';
  constructor(private invitationService: InvitationService) { }

  ngOnInit() {
  }

  inviteUser() {
    this.invitationService.inviteUser(this.invitation).subscribe((res) => {
    }, (error) => {
      console.log('Invitation failed.', error);
    });
  }
}
