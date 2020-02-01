import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.css']
})
export class Service3Component implements OnInit {
users:any[];
  constructor(private service:CourseService) 
  {

  }

  ngOnInit() 
  {
    this.users=this.service.getcourse();
  }

}
