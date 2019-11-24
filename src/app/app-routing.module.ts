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
import { AuthGuard } from './auth-guard';
import { Role } from './model/role';


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
    path: 'logout',
    component: UserLogoutComponent
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
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
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
