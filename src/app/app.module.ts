import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComComponent } from './home-com/home-com.component';
import { ListComComponent } from './list-com/list-com.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SortByPipe } from './sort-by.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { AddDataComponent } from './add-data/add-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComComponent,
    ListComComponent,
    SortByPipe,
    SearchFilterPipe,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
