import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  msg:string="Sending Data from Parent to child"
  myobj=
  {
    fname:"Avanti",
    lname:"Joshi",
    salary:20000
  }

  myarrobj=[
    {
      fname:"Virat",
      lname:"Kohli",
      id:1
    },
    {
      fname:"Mahindra Singh",
      lname:"Dhoni",
      id:2,
    },
    { 
      fname:"Sachin",
      lname:"Tendulkar",
      id:3
    },
    {
      fname:"Rahul",
      lname:"Dravid",
      id:4
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
