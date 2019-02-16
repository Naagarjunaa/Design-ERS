import { Component, OnInit } from '@angular/core';
import {AuthService,GoogleLoginProvider} from 'angular-6-social-login';
import { Router } from '@angular/router';
import {ConnectionService} from '../../../shared/services/connection.service';
import {userclass} from '../../../shared/services/userclass';
import { ErrorpageService } from '../../../shared/services/errorpage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    tempuserdata :userclass;
    
    constructor( private socialAuthService: AuthService,private _router: Router,
    private connectionservice : ConnectionService,
    private errorpageservice : ErrorpageService
    ){


        if(localStorage.getItem('userdata') !== null){
     
        //redirect to user home page
         }
        this.tempuserdata = new userclass();
}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData);
        let x = userData.email.split("@");
        if(!(x[1] === 'argusoft.in' || x[1] === 'argusoft.com')){
          this.errorpageservice.seterrormessage('Only argusoft Mail-id is allowed!');
          this._router.navigate(['errorpage']);
        }
        else{
        this.connectionservice.getUser(userData.email).subscribe((data) => {
          localStorage.setItem('usermail',userData.email);
          localStorage.setItem("userdata",JSON.stringify(data));
          console.log(userData);
          //re-direct user based on the role:
          if(data.role === "ROLE MEMBER"){
            this._router.navigate(['userdashboard']);
          }
          else{
            this._router.navigate(['admindashboard']);
          }
        });
        }
      }
    );
  }

  public socialSignOut(socialPlatform : string) {
      localStorage.removeItem('userdata');
        localStorage.removeItem('usermail');
      let socialPlatformProvider;
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      this.socialAuthService.signOut().then(
      (userData) => {
        localStorage.removeItem('userdata');
        localStorage.removeItem('usermail');
      } 
    );
  }


  ngOnInit() {
  }

}
