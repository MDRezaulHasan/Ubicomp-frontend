import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// backend API
  readonly rootURL = "https://localhost:5001";

  constructor(private http : HttpClient) { }
  registerUser(user : User)
  {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      EmailAddress: user.EmailAddress,
    }
    return this.http.post(this.rootURL + '/Auth/Register', body);
  }
  userAuthentication(userName,password){
    console.log("password: "+password);
    var data = "?username="+userName+"&password="+password;
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      return this.http.post(this.rootURL + '/Auth/Login', data,{headers:reqHeader});
  }
}
