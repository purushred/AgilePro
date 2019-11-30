import { SprintsComponent } from './sprint/sprints.component';
import { SettingsComponent } from './profile/settings.component';
import { Role } from './model/role';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { UserLoginComponent } from './authentication/user-login.component';
import { UserRegisterComponent } from './authentication/user-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureComponent } from './feature/feature.component';
import { EmailVerificationComponent } from './profile/email-verification.component';
import { InvitationComponent } from './profile/invitation.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './project/projects.component';
import { StoryComponent } from './stories/story.component';
import { TaskComponent } from './task/task.component';



const routes: Routes = [

  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'verify',
    component: EmailVerificationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'invite',
    component: InvitationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sprint',
    component: SprintsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feature/:id',
    component: FeatureComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'story/:id',
    component: StoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'task/:id',
    component: TaskComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
