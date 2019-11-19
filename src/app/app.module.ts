import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserRegistrationService } from './user-registration.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeaturesComponent } from './features/features.component';
import { StoriesComponent } from './stories/stories.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectComponent } from './project/project.component';
import { StoryComponent } from './story/story.component';
import { TaskComponent } from './task/task.component';
import { ReportsComponent } from './reports/reports.component';
import { FeatureComponent } from './feature/feature.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashboardComponent,
    UserRegisterComponent,
    ProfileComponent,
    ProjectsComponent,
    FeaturesComponent,
    StoriesComponent,
    TasksComponent,
    ProjectComponent,
    StoryComponent,
    TaskComponent,
    ReportsComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TabViewModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [UserRegistrationService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
