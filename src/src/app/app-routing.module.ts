import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplaybooksComponent } from './displaybooks/displaybooks.component';


const routes: Routes = [
  {path : 'display' , component : DisplaybooksComponent},
  {path : '' , redirectTo : '/display', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
