import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-book-s',
  templateUrl: './book-s.component.html',
  styleUrls: ['./book-s.component.css']
})
export class BookSComponent {
  books:any  
constructor(private bookService:UserService){}


  ngOnInit(){
      this.bookService.getbookDetails().subscribe({
          next:(response)=>{
             this.books = response
          },
          error:(reject)=>{
               console.log(reject)
          }
      })
  }
}
