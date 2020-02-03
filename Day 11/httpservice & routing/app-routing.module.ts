import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {
    path:'users',
    component:HttpserviceComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',redirectTo:'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
