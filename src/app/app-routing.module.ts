import { SideNavBarComponent } from './base/components/side-nav-bar/side-nav-bar.component';
import { HeaderBaseComponent } from './base/components/header-base/header-base.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login_/components/login/login.component';
import { ErrorpageComponent } from './shared/components/errorpage/errorpage.component';
import { AdmindashboardComponent } from './admin/components/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/components/userdashboard/userdashboard.component';
import { BaseModule } from './base/base.module';

const routes: Routes = [
  {path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'userdashboard',component:UserdashboardComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'errorpage',component:ErrorpageComponent},
{path:'header',component:HeaderBaseComponent},
{path:'nav',component:SideNavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
