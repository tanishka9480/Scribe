import { Component, OnInit } from '@angular/core';
import * as firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user:any={};
  posts:any[]=[];
  
  constructor() { 
    this.user=firebase.auth().currentUser;
    console.log(this.user)
    this.getposts();
  }

  ngOnInit(): void {
  }
  
  getposts(){
    //get the list of posts

    firebase.firestore().collection("posts").orderBy("created","desc").get().then((querySnapshot)=>{

      console.log(querySnapshot.docs);
      this.posts=querySnapshot.docs;
    
    }).catch((err)=>{
      console.log(err);
    })
    
  }
  
  onpostCreated(){
    //refresh the list of posts
    this.posts=[];
    this.getposts();
  }

  onDelete(){
    //refresh the list of posts
    this.posts=[];
    this.getposts();

  }

}
