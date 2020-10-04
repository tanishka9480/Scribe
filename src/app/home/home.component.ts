import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  name:string="inTeRnsHala trainings";
  amount:number =123456.123;
  dateofbirth=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
