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


const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
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
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'feature',
    component: FeatureComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'task',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
