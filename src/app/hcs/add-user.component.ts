import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  template:  `
  Hi, Welcome to LPU,<br>
  Cost {{count}}<br>
  price {{price*count}}<br>
  `,
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit 
{

  price=100;
  count=5;

  constructor() { }
  ngOnInit(): void 
  {
  }
}
