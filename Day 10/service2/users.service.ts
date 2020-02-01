import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getAllUsers()
  {
    return [
      {
        id:101,
        name:"SALMAN",
        city:"Mumbai"
      },
      {
        id:102,
        name:"AMIR",
        city:"Pune"
      },
      {
        id:103,
        name:"ROHAN",
        city:"Delhi"
      }
    ];
  }
}
