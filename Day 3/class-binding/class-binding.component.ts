import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string='success';
  myclass1:string='danger';
  myclass2:string='special';
  rating:number=3;
  rating1:number=5;
  iserror1:boolean=true;
  iserror2:boolean=false;

  myobj={
    'success':!this.iserror1,
    'danger':this.iserror1,
    'special':!this.iserror2
  }

 

 

  constructor() { }

  ngOnInit() {
  }
  

}
