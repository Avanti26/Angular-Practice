import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  course:string[]=["Angular 7","React Js","Node Js","Mongo DB","Python"]


  course1:string[]=["Angular 7","React Js","Node Js","Mongo DB","Python"]

  course2:string[]=["Angular 7","React Js","Node Js","Mongo DB","Python"]

  course3:string[]=["Angular 7","React Js","Node Js","Mongo DB","Python"]

  course4:string[]=["Angular 7","React Js","Node Js","Mongo DB","Python"]

  product=[
    {
      productname:"Park Avenue",
      quantity:"100gm",
      price:200
    },
    {
      productname:"Axe Signature",
      quantity:"150gm",
      price:250
    },
    {
      productname:"Fogg Scent",
      quantity:"300gm",
      price:450
    },
    {
      productname:"Nike perfume",
      quantity:"100gm",
      price:270
    }
  ]




  constructor() { }

  ngOnInit() {
  }

}
