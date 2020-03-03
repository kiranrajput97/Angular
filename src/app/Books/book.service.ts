import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService
{
  private _endPoint = 'http://localhost:400/book'
  url = 'http://localhost:400';
  constructor(private http: HttpClient) { }

  getBooks()
  {
    return this.http.get(`${this.url}/books`);
  }

  delete(book: Book): Observable<Book> {
    return this.http.delete(`${this._endPoint}/${book.id}`).mapTo(book);
  }
}