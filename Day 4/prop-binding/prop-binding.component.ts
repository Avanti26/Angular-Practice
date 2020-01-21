import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {
 name:string="Avanti Joshi"; 
 imgsrc:string="../../assets/avanti.jpg";
 hideme:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
