import { Injectable } from '@angular/core';
import {userclass} from './userclass';
import { HttpClient,HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  userdata:userclass;
  url:string = "http://192.1.200.114:3000";
  constructor(private http:HttpClient) {
    this.userdata = new userclass();
   }

   getUser(tmail:string):Observable <any>{
    return this.http.get<any>(`${this.url}/${tmail}`);
  }
}