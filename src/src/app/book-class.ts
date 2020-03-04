import { BookInterface } from './book-interface';

// BookClass to represent a Single Book 

export class BookClass implements BookInterface{
    // instance variable 
    public id : number;
    public name : string ; 
    public cost : number;
    public author : string;
}
