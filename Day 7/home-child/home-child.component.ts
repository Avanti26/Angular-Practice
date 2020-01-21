import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
Count:number=0;
mycolor:string="";
  constructor() { }

  ngOnInit() {
  }
IncrementByOne()
{
  this.Count=this.Count+1;
  this.mycolor="green";
}
DecrementByOne()
{
  this.Count=this.Count-1;
  this.mycolor="red";
}
}