import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any= {};
  posts:any[]=[];
  
  constructor(public activatedroute:ActivatedRoute) {
    
    let id = this.activatedroute.snapshot.paramMap.get('id');
    console.log(id);

    this.getprofile(id);
    this.getUsersPosts(id);
  }
 
 ngOnInit(): void {
  }

  getprofile(id:string){

   firebase.firestore().collection("users").doc(id).get().then((documentSnapshot)=>{

      this.user=documentSnapshot.data();
      this.user.displayName=this.user.firstname+" "+this.user.lastname;
      this.user.id=documentSnapshot.id;
      this.user.hobbies=this.user.hobbies.split(",");
      console.log(this.user);
    
    }).catch((error)=>{
      console.log(error);
    })
  
  }

  getUsersPosts(id:string){
    firebase.firestore().collection("posts")
    .where("owner","==",id).get().then((data)=>{

      this.posts= data.docs;
    })
  }

}
