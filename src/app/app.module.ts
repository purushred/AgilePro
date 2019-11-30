import { SprintsComponent } from './sprint/sprints.component';
import { SettingsComponent } from './profile/settings.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './authentication/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterComponent } from './authentication/user-register.component';
import { UserRegistrationService } from './service/user-registration.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './project/projects.component';
import { FeaturesComponent } from './feature/features.component';
import { StoriesComponent } from './stories/stories.component';
import { TasksComponent } from './task/tasks.component';
import { ProjectComponent } from './project/project.component';
import { StoryComponent } from './stories/story.component';
import { TaskComponent } from './task/task.component';
import { ReportsComponent } from './reports/reports.component';
import { FeatureComponent } from './feature/feature.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EmailVerificationComponent } from './profile/email-verification.component';
import { InvitationComponent } from './profile/invitation.component';
import { SprintComponent } from './sprint/sprint.component';

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
    FeatureComponent,
    EmailVerificationComponent,
    InvitationComponent,
    SettingsComponent,
    SprintComponent,
    SprintsComponent
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
  providers: [UserRegistrationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
