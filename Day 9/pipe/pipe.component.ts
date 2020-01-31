import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
name:string="Hello Everyone !";
myobj={
  fname:"Avanti",
  lname:"Joshi",
  id:1
}
mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
