import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
constructor(private bs:BookService,private router:Router)
{

}
bobj:Book=new Book()
localAdd()
{ console.log("local book add function",this.bobj);
  // this.bs.addBook(this.bobj);
  alert("book added successfully");
  this.router.navigate(['/view-all-books'])
}
}
