import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable({
 providedIn: 'platform' 
})
export class HeroService 
{
  /*static getHeroes(): import("./hero").Hero[] 
  {
    return HEROES;  
  }*/
 getHeroes() { return "LPU"; }
}
