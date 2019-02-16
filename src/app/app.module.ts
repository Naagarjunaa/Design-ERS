import { BaseService } from './base/services/base.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login_/login_.module';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { BaseModule } from './base/base.module';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [{
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('461047377975-ia3ciuhpc67skqcv3vr0p9dealp3lglp.apps.googleusercontent.com')
      }]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    SocialLoginModule,
    LoginModule,
    SharedModule,
    BaseModule

  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
