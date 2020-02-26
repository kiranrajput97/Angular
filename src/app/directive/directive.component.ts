import { Component, OnInit, ElementRef } from '@angular/core';

import { Directive } from '@angular/core';
//import { Renderer,HostListener } from '@angular/core';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  a=10;
  b=2;
  str='yes';
  myVar='';
  choice=0;
  color:string='red';
  fontSize:number=10;
  cities:string[];
  people = [
  { name: 'Anderson', age: 35, city: 'Sao Paulo' },
  { name: 'John', age: 12, city: 'Miami' },
  { name: 'Peter', age: 22, city: 'New York' }
  ];

  content='LPU content';
  constructor() { }

  ngOnInit() 
  {
      this.cities = ['Miami', 'Sao Paulo', 'New York'];
  }
  myFunc()
  {
    return true;
  }
  nextChoice()
  {
    this.choice++;
    this.choice%=5;
  }
  apply(color: string, fontSize: number): void 
  {
    this.color = color;
    this.fontSize = fontSize;
  }
}


/*
@Directive({ selector:"[ccCardHover]"})
class CardHoverDirective {
constructor(private el: ElementRef, private renderer: Renderer) 
{
renderer.setElementStyle(el.nativeElement, 'backgroundColor',
'gray');
}

@HostListener('mouseover') onMouseOver() {
let part = this.el.nativeElement.querySelector('.card-text')
this.renderer.setElementStyle(part, 'display', 'block');
}
*/


