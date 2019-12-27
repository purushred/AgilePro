import { Invitation } from './../model/invitation';
import { InvitationService } from './../service/invitation.service';
import { Project } from './../model/project';
import { UserRegistrationService } from './../service/user-registration.service';
import { ProjectService } from './../service/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feature } from '../model/feature';
import { FeatureService } from '../service/feature.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  private userEmail = '';
  private message = '';
  private isShowAddFeatureModal = false;
  private isShowInviteModal = false;
  private projectMembers: Array<string> = [];
  private project: Project = new Project();
  private feature: Feature = new Feature();
  private projectId: string;
  private features: Array<Feature> = new Array();

  constructor(private route: ActivatedRoute,
              private featureService: FeatureService,
              private projectService: ProjectService,
              private userService: UserRegistrationService,
              private inviteService: InvitationService) {
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(this.userService.getLoggedInUser().id, this.projectId).subscribe( (response) => {
      if (response) {
        this.project = response;
      } else {
        console.log('No project for selected user.');
      }
    }, (error) => {
      console.error('Failed to retrieve project for user.', error);
    });
  }

  showAddFeatureModal() {
    this.isShowAddFeatureModal = true;
  }

  /**
   * Create feature for the selected project.
   */
  createFeature() {
    this.feature.projectId = this.projectId as unknown as number;
    this.featureService.createFeature(this.feature).subscribe((res) => {
      if (res) {
        this.features.push(res);
        this.isShowAddFeatureModal = false;
      } else {
        console.log('Could not create feature');
      }
    }, (error) => {
      console.log('Unable to create feature, Please try again.', error);
    });
  }

  showInviteModal() {
    this.isShowInviteModal = true;
  }

  handleInviteUser() {
    const emailsArray = this.userEmail.split(',');
    const invitList = new Array<Invitation> ();
    emailsArray.forEach ((email) => {
      const inv = new Invitation();
      inv.emailId = email;
      inv.invitationMessage = this.message;
      invitList.push(inv);
    });
    this.projectMembers = this.projectMembers.concat(emailsArray);
    this.isShowInviteModal = false;
    this.inviteService.inviteUsers(invitList).subscribe((res) => {
    }, (error) => {
      console.log('Invitation failed.', error);
    });
  }
}
