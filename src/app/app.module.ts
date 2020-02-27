import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { VoteComponent } from './vote/vote.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { DirectiveComponent } from './directive/directive.component';
import { SearchComponent } from './search/search.component';
import { PipeBirthdayComponent } from './pipe-birthday/pipe-birthday.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MockHeroesComponent } from './heroes/mock-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    VoteComponent,
    VoteTakerComponent,
    DirectiveComponent,
    SearchComponent,
    PipeBirthdayComponent,
    CustompipeComponent,
    HeroesComponent,
    MockHeroesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }