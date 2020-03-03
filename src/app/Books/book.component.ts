import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl:'book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit 
{
  
  title = 'book';
  books: Book[];
  constructor(private bookServie: BookService) { }
  ngOnInit() 
  {
    this.bookServie.getBooks().subscribe((data: Book[]) => {this.books=data;});
  }

 
  

}
