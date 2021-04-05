import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import {ToastrService} from 'ngx-toastr'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService:UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm()
  }
  //using "?" mark for defining null able value 
  resetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.user = {
      UserName:"",
      Password:"",
      EmailAddress:""
    }
  }
  onSubmit(form:NgForm){
     this.userService.registerUser(form.value).subscribe()
      this.resetForm(form); 
       this.toastr.success('User successfully registered!');
//.subscribe(   
//       (res:any)=>{
// this.resetForm(form);
//         if(res.Succeeded == true){
//         this.resetForm(form);
  
//         this.toastr.success('User successfully registered!');
//       }},
//       err=>{console.log(err)}
//       // if(data.Succeeded == true){
//       //   this.resetForm(form);
  
//       //   this.toastr.success('User successfully registered!');
//       // }else{
//       //   this.toastr.error(data.Errors[0]);
//       // }

//     );
  }

}
