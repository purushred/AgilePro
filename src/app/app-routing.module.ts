import { NgModule } from '@angular/core';
import {UserLoginComponent} from './user-login/user-login.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { FeatureComponent } from './feature/feature.component';
import { StoryComponent } from './story/story.component';
import { TaskComponent } from './task/task.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { InvitationComponent } from './invitation/invitation.component';


const routes: Routes = [

  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'logout',
    component: UserLogoutComponent
  },
  {
    path: 'verify',
    component: EmailVerificationComponent
  },
  {
    path: 'invite',
    component: InvitationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
  {
    path: 'feature/:id',
    component: FeatureComponent
  },
  {
    path: 'story/:id',
    component: StoryComponent
  },
  {
    path: 'task/:id',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
