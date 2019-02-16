import { Component, OnInit } from '@angular/core';
import { ErrorpageService } from '../../services/errorpage.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent implements OnInit {
  errormessage : string = "";
  constructor(private errorpageservice : ErrorpageService) { 
    this.errormessage = this.errorpageservice.geterrormessage();
    this.errorpageservice.seterrormessage('');
  }
  
  ngOnInit() {
  }
}
