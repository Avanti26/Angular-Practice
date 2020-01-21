import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css']
})
export class StyleBindComponent implements OnInit {
  mycolor:string="blue";
  mybg:string="lightgreen";
  rating:number=5;
  price:number=35;
  price1:number=15;
  mycolor1:string="red";
  mycolor2:string="green";
  myqty1:string="orange";
  myqty2:string="lightgreen";
  qty:number=3;
  myobj1={
    color:'blueviolet',
    background:'orange',
    fontFamily:'cursive',
    fontStyle:'italic'
  };
  myobj2={
    color:'red',
    background:'yellow',
    fontFamily:'cursive',
    fontStyle:'bold'
  };
  constructor() { }

  ngOnInit() {
  }

}
