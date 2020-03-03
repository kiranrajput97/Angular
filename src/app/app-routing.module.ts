import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComComponent } from './home-com/home-com.component';
import { ListComComponent } from './list-com/list-com.component';
import { AddDataComponent } from './add-data/add-data.component';


const routes: Routes =[
  {
    path: 'HomePage' , component:HomeComComponent
  },
  /**/
  {
    path:'ListData', component:ListComComponent
  },
  {
    path:'AddData', component:AddDataComponent 
  },
  {
    path:'',redirectTo:'/HomePage',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
