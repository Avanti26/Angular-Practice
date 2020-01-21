import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeChildComponent } from '../home-child/home-child.component';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {
;
  @ViewChild(HomeChildComponent) childinstance:HomeChildComponent;
  constructor() { }

  
  ngOnInit() {
  }
  onIncrement()
  {
    this.childinstance.IncrementByOne();
  }
  onDecrement()
  {
    this.childinstance.DecrementByOne();
  }
}
