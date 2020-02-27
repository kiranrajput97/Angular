import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
  <h2>Heroes</h2>
 
`
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// this is from line no. 6 <app-hero-list></app-hero-list>