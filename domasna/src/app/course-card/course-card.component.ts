import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import {url} from 'inspector';

import {Course, suzi} from '../model/course';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{

constructor(){ }

@Input()
title:string="";

@Input()
crs:Course = suzi;

@Input()
indeks:number=0;

@Output('suzi')
cuci = new EventEmitter<Course>();

ngOnInit(){

}

onCrsViewed(){
  console.log("kart element");
  this.cuci.emit(this.crs)
}

klasi(){
  if(this.crs.category == 'BEGINNER') {return 'begin'}
}

stilovi(){
  if(this.crs.category == 'BEGINNER')
  return {'background-image':'url('+this.crs.iconUrl+')'};
}

}
