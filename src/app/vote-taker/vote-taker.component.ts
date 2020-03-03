import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template:  ` 
  <h2>Should mankind colonize the Universe?</h2>
  <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
  <app-vote *ngFor="let voter of voters"
    [name]="voter"
    (voted)="onVoted($event)">
  </app-vote>
  `,
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit 
{
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto','Ram','Shyam','Baapu','Aasa Ram'];

  onVoted(agreed: boolean) 
  {
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
