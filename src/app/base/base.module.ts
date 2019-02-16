import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BaseService } from './services/base.service';
import { HeaderBaseComponent } from './components/header-base/header-base.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ 
    HeaderBaseComponent,
    SideNavBarComponent,
    LoginHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [BaseService],
  bootstrap: []
})
export class BaseModule { }
