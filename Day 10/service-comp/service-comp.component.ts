import { Component, OnInit } from '@angular/core';
import { Myservice } from './course.service';
import { UserService } from './Userservice.service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css']
})
export class ServiceCompComponent implements OnInit {
  
  
mycourse=[];
users=[];
  // constructor(private service: Myservice) { 
  //   let service=new Myservice();
  //   this.mycourse=service.getcourse();
  // }
  constructor(private userservice: UserService) { }
    
  ngOnInit(): void {
    this.users = this.userservice.getAllUsers();
  }

  // ngOnInit() {
  //   this.mycourse=this.service.getcourse();
  //   }
}