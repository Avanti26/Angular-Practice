import { Component, OnInit } from '@angular/core';
import { UserService } from '../service-comp/Userservice.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {
pageTitle:string="Services in Angular";
users:any[]=[];
  constructor(private userService:UsersService) 
  { 

  }

  ngOnInit()
  {
    this.users=this.userService.getAllUsers();
  }

}
