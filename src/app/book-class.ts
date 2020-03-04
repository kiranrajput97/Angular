import { BookInterface } from './book-interface';

// BookClass 

export class BookClass implements BookInterface{
    // instance variable declared here.
    public id : number;
    public name : string ; 
    public cost : number;
    public author : string;
}
