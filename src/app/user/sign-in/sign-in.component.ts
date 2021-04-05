import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

   user:User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isLogInError : boolean= false;
  constructor(private userService:UserService, private toastr:ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  //login form submitted and redirect to home page
   onSubmit(UserName, Password){
         
     var data = this.userService.userAuthentication(UserName,Password)
    //  .subscribe((data:any)=>{
    //    console.log("Password: "+Password);
    //   localStorage.setItem('userToken',data.token);
    //   this.toastr.success('User successfully log in!');
    //   this.router.navigate(['/home']);
    //  },
    //  (err:HttpErrorResponse)=>{this.isLogInError=true});
     
      localStorage.setItem('userToken',JSON.stringify(data));
      this.toastr.success('User successfully log in!');
      this.router.navigate(['/home']);
      
  }
 
}
