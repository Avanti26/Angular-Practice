import { Component} from '@angular/core';

@Component({
  selector: 'app-custompipe2',
  templateUrl: './custompipe2.component.html',
  styleUrls: ['./custompipe2.component.css']
})
export class Custompipe2Component{
  pageTitle:string="Pipes in Angular";
  users:any=[
    {
      id:101,
      name:"John",
      city:"DELHI",
      salary:12000,
      dob:new Date("05/10/1989")
    },
    {
      id:102,
      name:"Peter",
      city:"PUNE",
      salary:1200,
      dob:new Date("05/12/1985")
    },
    {
      id:103,
      name:"Omar",
      city:"New York",
      salary:20000,
      dob:new Date("10/10/1991")
    },
    {
      id:104,
      name:"Kumar",
      city:"DELHI",
      salary:3000,
      dob:new Date("12/08/1987")
    }];
    
  }
        
            