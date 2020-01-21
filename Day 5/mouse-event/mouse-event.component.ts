import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {

  productarr=[
    {
      product:"Perfume",
      quantity:"30gm",
      price:30
    },
    {
      product:"Shahi uttar",
      quantity:"40gm",
      price:50
    },
    {
      product:"Gulab Jal",
      quantity:"20gm",
      price:80
    },
    {
      product:"shahi utane",
      quantity:"30gm",
      price:10
    }
  ];
  selected:string='';
  selected1:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseHover(item){
    // console.log("Mouse Over Event Occur!!!");
     //alert("Mouse Over Event Occur");
 
     this.selected=item.product;
   }
 
   OnMouseout(){
     this.selected='';
   }
   
   onMouseHover1(item){
    // console.log("Mouse Over Event Occur!!!");
     //alert("Mouse Over Event Occur");
 
     this.selected1=item.product;
   }
 
   OnMouseout1(){
     this.selected1='';
   }


}
