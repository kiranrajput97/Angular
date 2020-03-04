import { Injectable } from '@angular/core';
import { BookClass } from './book-class';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Array of Object to Store all Json File Objects
  bookData : Array<BookClass> = [];

  constructor(private http : HttpClient) { 
    this.http.get("../../assets/bookdata.json").subscribe((data:BookClass[])=>{
      data.forEach(element => {
        this.bookData.push(element);
      });

      // display all Object in console
      console.log(data);
    }) 
  }

  // Generating Getters and Setters to Access bookData Array

  getBookData(){
    return this.bookData;
  }  

  setBookData(book : BookClass){
    this.bookData.push(book);
  }
}
