import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { courseComponent } from './course.component';
import { studentComponent } from './student.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { imageComponent } from './image.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule} from '@angular/forms';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SonglistComponent } from './songlist/songlist.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { Myservice } from './service-comp/course.service';
import { UserService } from './service-comp/Userservice.service';

@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    studentComponent,
    TestComponentComponent,
    imageComponent,
    PropertyBindingComponent,
    StylebindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    IfDirectiveComponent,
    ForDirectiveComponent,
    SwitchDirectiveComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent2Component,
    HomeParentComponent,
    HomeChildComponent,
    MouseEventComponent,
    StringInterpolationComponent,
    PropBindingComponent,
    StyleBindComponent,
    TwowaybindComponent,
    HomeComponent,
    SidebarComponent,
    SonglistComponent,
    ServiceCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Myservice,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
