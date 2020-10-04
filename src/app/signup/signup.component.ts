import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import * as firebase  from 'firebase/app';
import 'firebase/firestore';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  myForm:FormGroup;
  message:string= "";
  UserError: any;
 
 
  constructor(public fb:FormBuilder,public authservice:AuthService,public router:Router) {
    
    this.myForm=this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['',[Validators.required]]
  },{
    validator:this.checkIfmatchingpasswords("password","confirmpassword")
  })

}
  
checkIfmatchingpasswords(passwordkey: string, confirmpasswordkey: string){
  return(group:FormGroup)=> {
   let  password = group.controls[passwordkey];
   let confirmpassword = group.controls[confirmpasswordkey];

   if(password.value == confirmpassword.value){
      return;
   } else {
     confirmpassword.setErrors({
       notEqualToPassword:true
   })
 }

}
}

onSubmit(signupform){
  let email:string=signupform.value.email;
  let password:string=signupform.value.password;
  let firstname:string=signupform.value.firstname;
  let lastname:string=signupform.value.lastname;
  let randomNumber= Math.floor(Math.random() * 1000);
  
  this.authservice.signup(email,password,firstname,lastname).then((user:any)=> {

  firebase.firestore().collection("users").doc(user.uid).set({
    email:signupform.value.email,
    firstname:signupform.value.firstname,
    lastname:signupform.value.lastname,
    photoURL:"https://api.adorable.io/avatars/" + randomNumber,
    interests:"",
    bio:"",
    hobbies:""
}).then(()=>{
    this.message= "you have been signed up successfully.please login.";
    this.UserError=null;
    this.router.navigate(['/myblogs'])
}) 

}).catch((error)=>{
  console.log(error);
  this.UserError=error;
})

}

ngOnInit(): void {
  }

}

