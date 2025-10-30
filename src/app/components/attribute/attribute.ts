import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-attribute',
  imports: [NgClass,NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
   studentList = [
    {name:'AAA', city:'Pune',status:true},
    {name:'BBB', city:'Mumbai',status:false},
    {name:'CCC', city:'Banglore',status:false},
    {name:'DDD', city:'Goa',status:true},
  ]

  themeClass : string = "bg-success";

  textColor= "red";


  myCss : any={
    'background-color':'cadetblue',
    'color':'white',
    'font-size':'40px'
  }
}
