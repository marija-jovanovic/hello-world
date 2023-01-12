import { Component, Input} from '@angular/core';
import { Course, suzi } from '../model/course';

@Component({
  selector: 'app-proba-eden',
  templateUrl: './proba-eden.component.html',
  styleUrls: ['./proba-eden.component.css']
})
export class ProbaEdenComponent {

  constructor(){}

@Input()
deskripcija:Course = suzi;



}
