import { Component, OnInit } from '@angular/core';
import { BookClass } from '../book-class';
import { BookService } from '../book.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.css']
})
export class DisplaybooksComponent implements OnInit {

  // Reference Varibale For the BookList Array inside BookService 

  bookList : Array<BookClass> = [];

  // Constructor 

  constructor(private bookService : BookService) {
    this.bookList = this.bookService.getBookData();
  }

  ngOnInit(): void {
  }

  displayBlock : boolean = false;

  // Update Book
  copyObject : BookClass;
  updateInput : BookClass = new BookClass();

  delete(book : BookClass){
    this.bookList.forEach( (data,index) => {
      if(data === book){
       this.bookList.splice(index,1);
      }
    });
  }

  update(book : BookClass){
    this.displayBlock = true;
    this.updateInput.id = book.id;
    this.updateInput.name  = book.name;
    this.updateInput.author = book.author;
    this.updateInput.cost = book.cost;
    this.copyObject = book;
  }

  updateBook(book : BookClass){
    this.bookList.forEach((object) => {
      if(object.id === book.id){
       object.id = this.updateInput.id;
       object.name = this.updateInput.name;
       object.author = this.updateInput.author;
       object.cost = this.updateInput.cost;
      }
   });
   this.displayBlock = false;
  }
}
