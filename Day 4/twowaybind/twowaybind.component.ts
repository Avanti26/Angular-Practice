import { Component, OnInit } from '@angular/core';
import { isBoolean } from 'util';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.css']
})
export class TwowaybindComponent implements OnInit {
  name:string="";
  hideme:boolean=true;
  name1:string="VBA";
  name2:string="";
  constructor() { }

  ngOnInit() {
  }
  myclick()
  {
    this.name="Hey, I am back in town!";
  }

  myclick1()
  {
    this.hideme=false;
  }
  
  myclick2()
  {
    this.name2="Avanti Joshi"
  }
}
