import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  obj:Book[]=[
    {bookId:101,bookTitle:"java",bookAuthor:"charles",bookPrice:850},
    {bookId:102,bookTitle:"angular",bookAuthor:"james",bookPrice:680},
    {bookId:103,bookTitle:"sql",bookAuthor:"johnson",bookPrice:900},
    {bookId:104,bookTitle:"automative",bookAuthor:"jack",bookPrice:560},
    {bookId:105,bookTitle:"aws",bookAuthor:"gosling",bookPrice:750},
  ]
  // addBook(newB:Book)
  // {
  //   console.log("adding new book ",newB);
  //   this.obj.push(newB);
  // }
  // editBook(editB:Book) :boolean{
  //   console.log("eding the book",editB);
  //   for(let editArray of this.obj)
  //   {
  //     if(editArray.bookId==editB.bookId)
  //     {
  //       this.
  //     }
  //   }
  // }
}