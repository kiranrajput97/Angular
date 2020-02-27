import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
  <h2>Heroes</h2>
  <app-hero-list></app-hero-list>
`
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
