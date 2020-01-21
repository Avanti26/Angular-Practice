import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  myname:string='Avanti Joshi';
  myname2:string='';
  ishidden:boolean=true;
  ishidden1:boolean=true;
  username:string='';
  constructor() { }

  ngOnInit() {
  }
  onShowMe()
  {
    this.ishidden=false;
  }


  onChange(){
    this.ishidden1=false;
  }

  OnSubmit(){
    if(this.username===''){
      alert('Please Enter the Name...')
    }else{
      alert("Username is "+this.username)
    }
  }

  OnSubmit1(user){
    console.log(user.value);
    if(user.value == ''){
      alert('Please Enter the Name...')
    }
    else{
      alert("Username is "+user.value)
    }
  }
}
