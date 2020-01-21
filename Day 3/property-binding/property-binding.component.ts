import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit 
{

  name:string="Robert Pattinson";
  imgUrl:string="../../assets/robert.jpg";
  ishidden:boolean=true;
  ishidden1:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
