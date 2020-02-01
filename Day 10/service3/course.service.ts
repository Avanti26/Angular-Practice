import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getcourse()
  {
return ["Angular 7","React JS","Vue JS","Amber JS","Mean Stack"];
  }
  constructor() {   }
}
