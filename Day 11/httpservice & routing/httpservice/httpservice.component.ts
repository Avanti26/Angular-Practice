import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.css']
})
export class HttpserviceComponent implements OnInit {
users:any;
  constructor(private service:MyhttpService) { }

  ngOnInit() 
  {
    this.service.getData().subscribe((data)=>{
      this.users=data;
    })
  }
  

}
