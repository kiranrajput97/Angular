import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static data: Book[];
  j:number;
  x:Book[];

  a:number;
  url = 'assets/list.json';
  
  constructor(private http: HttpClient) {
    this.http.get<Book[]>(this.url).subscribe(e => {
    UserService.data = e;
    },
      err => {
        console.log(err.stack);
      });

  }

  addBook(user:Book) {
    UserService.data.push(user);
  }
  
  getAllBooks() {
    return UserService.data;
  }

  remove(i:number)
  {
    UserService.data.splice(i,1);
  }
}