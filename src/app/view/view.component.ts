import { Component, OnInit,NgZone } from '@angular/core';
import * as firebase  from 'firebase/app';
import 'firebase/firestore';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  post:any={};
  postid:string= "";
  
  constructor(public activatedroute : ActivatedRoute,public ngzone:NgZone) {
    
    let postid=this.activatedroute.snapshot.paramMap.get("postid");
   
    this.postid=postid;

    firebase.firestore().collection("posts").doc(postid).get().then((docSnapshot)=>{
      this.ngzone.run(()=>{
      this.post=docSnapshot.data();
      console.log(this.post);
    })

    this.post=docSnapshot.data();
    console.log(this.post);
  })
  
}

  ngOnInit(): void {
  }

}
