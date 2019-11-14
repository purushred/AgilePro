import { NgModule } from '@angular/core';
import {UserLoginComponent} from './user-login/user-login.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
  {
    path: 'user/login',
    component: UserLoginComponent
  },
  {
    path: 'user/login/dashboard',
    component: DashboardComponent
  },
  {
    path: 'user/login/register',
    component: UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
