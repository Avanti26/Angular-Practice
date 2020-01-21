import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

//  count:number=0;

  constructor() { }

  ngOnInit() {
  }
  // myclick()
  // {
  //   //console.log("Click event occurs !!!");
  //   if(this.count==0)
  //   {
  //     console.log("Click event occurs !!!");
  //     this.count++; 

  onChange()
  {
    console.log("Change event occurs!!");
  }
  onKeyUp()
  {
    console.log("Key Up event occurs!!");
  }
  onKeyDown()
  {
    console.log("Key Down event occurs!!");
  }
  onClick(myevent)
  {
    console.log(myevent);
    console.log("Accessed value is "+myevent.target.value);
  }
}
  


