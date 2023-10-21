import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { CourseService } from 'src/app/expresswithmysql/course.service';
import { IBook, ICourse } from 'src/app/expresswithmysql/icourse';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  id: string | null = ''
  book: IBook | undefined

  constructor(
    private activatedRoute:ActivatedRoute,
    private courseService:UserService,
    private router:Router
    ){}

  ngOnInit(){
      this.activatedRoute.paramMap.subscribe({
          next:(params)=>{
             this.id =  params.get('id')
             this.courseService.getbookDetailsById(this.id).subscribe({
               next:(response)=>{
                console.log(response)
                    this.book = response
               },
               error:(reason)=>{
                  console.log(reason)
               }
             }) 
              
          }
      })
  }

  deleteRecord(){
       if(confirm('Are You Sure to delete?')){

          this.courseService.deleteBookRecord(this.id).subscribe({
               next:(response)=>{
                  alert('Record deleted successfully')
                  this.router.navigate(['/book'])
               },
               error:(reason)=>{
                   console.log(reason)
               }
          })
       }
  }

}
