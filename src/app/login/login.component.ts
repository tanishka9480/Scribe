import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  myForm:FormGroup;
  message: string= "";
  UserError:any;

 constructor(public fb:FormBuilder,public authservice:AuthService,public router:Router) {

  this.myForm=this.fb.group({
    email:['', [Validators.email,Validators.required]],
    password:['', [Validators.required]]
  })
  
}

onSubmit(form){
  this.authservice.login(form.value.email, form.value.password)
  .then((data)=>{
    console.log(data);
    this.message="you have been logged in successfuly.";
    this.UserError=null;
    this.router.navigate(['/myblogs'])
  
}).catch((error)=>{
    console.log(error);
    this.UserError=error;
  })

}


  ngOnInit(): void {
  }

}