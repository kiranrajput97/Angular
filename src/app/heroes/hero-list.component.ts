import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
`
})

export class HeroListComponent 
{
  heroes: string;
  constructor(heroService: HeroService) 
  {
    this.heroes = heroService.getHeroes();
  }
}
