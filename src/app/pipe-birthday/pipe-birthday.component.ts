import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-birthday',
  templateUrl: 'pipe-birthday.component.html', 
  //`<p> {{4|fileSize: 100}}`,
  styleUrls: ['./pipe-birthday.component.css']
})
export class PipeBirthdayComponent implements OnInit 
{
  
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  
  constructor() { }
  ngOnInit(): void { }

}
