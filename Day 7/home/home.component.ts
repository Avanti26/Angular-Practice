import { Component, OnInit, ViewChild } from '@angular/core';
import { SonglistComponent } from '../songlist/songlist.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild (SonglistComponent) songId:SonglistComponent;
  constructor() { }

  ngOnInit() {
  }

  onFilter(id)
  {
    console.log("In home component" +id);
    this.songId.songlist(id);
  }
}
