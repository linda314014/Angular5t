import { Component, OnInit, Output , EventEmitter } from '@angular/core'; 
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  twMoney=0;

  r=0;



  constructor(private bmiService:BmiService) { }

  ngOnInit() {
    
  }

}
