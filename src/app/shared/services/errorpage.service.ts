import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorpageService {

  errormessage:string;
  constructor() {
    this.errormessage = "";
   }

   geterrormessage(){
    return this.errormessage;
  }

  seterrormessage(tmessage:string){
    this.errormessage=tmessage;
  }

}
