import { Component } from "@angular/core";

@Component(
    {
        selector:'app-image',
        templateUrl:'./image.component.html',
        styleUrls:['./image.component.css']
    })

   export class imageComponent
    {
        imgsrc:string="../../assets/robert.jpg";
    }