import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit 
{
  mycolor:string='green';
  rating:number=3;
  mycolor1:string='blue';
  mycolor2:string='magenta';
  rating1:number=6;

  myobj={
    color:'blueviolet',
    fontFamily:'cursive',
    fontStyle:'italic'
  }
  constructor() { }

  ngOnInit() {
  }

}
