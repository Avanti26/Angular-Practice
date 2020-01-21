import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  // @Output() ChildToParent=new EventEmitter();

  // @Output() ChildToParentObj=new EventEmitter();

  @Output() ChildToParentArrObj=new EventEmitter();

  constructor() { }
// childmsg="Data from Child";

myObj={
  fname:"Vinay",
  lname:"Joshi",
  phno:94217
};

myarrobj=[
  {
    prodname:"Shoes",
    company:"Nike",
    price:5000
  },
  {
    prodname:"Kitoes",
    company:"Reebok",
    price:2000 
  },
  {
    prodname:"Crocs",
    company:"Adidas",
    price:1500
  },
  {
    prodname:"Slippers",
    company:"Free-lancer",
    price:800
  }
];
  ngOnInit() {
  }
  // onSendData()
  // {
  //   this.ChildToParent.emit(this.childmsg);

  // }
  // OnSendObj()
  // {
  //   this.ChildToParentObj.emit(this.myObj);
  // }

  OnSendArrObj()
  {
    this.ChildToParentArrObj.emit(this.myarrobj);
  }
}
