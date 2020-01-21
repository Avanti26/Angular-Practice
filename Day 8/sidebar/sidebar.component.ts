import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  moviename=["Bollywood","Punjabi","Marathi","Hollywood","Purani Jeans"];

  @Output() movieId=new EventEmitter();
    constructor() { }

  ngOnInit() {
  }
  onClick(i)
  {
    this.movieId.emit(i);
  }
}
