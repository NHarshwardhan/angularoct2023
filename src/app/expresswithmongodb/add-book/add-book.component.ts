import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { CourseService } from 'src/app/expresswithmysql/course.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  CourseForm: FormGroup = new FormGroup({})

  constructor(
      private bookService:UserService,
      private router:Router
      ){}

  ngOnInit(){
      this.CourseForm = new FormGroup({
           coursename: new FormControl(),
           courseprice: new FormControl()
      })
  }

  registerCourse(){
        this.bookService.createNewBook(this.CourseForm.value).subscribe({
             next:(response)=>{
                  alert('Record added successfully')
                  this.router.navigate(['/book'])
             },
             error:(reason)=>{
                console.log(reason)
             }
        })
  }
}
