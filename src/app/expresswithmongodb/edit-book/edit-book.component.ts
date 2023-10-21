import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { CourseService } from 'src/app/expresswithmysql/course.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  id: string | null = ''
     CourseForm: FormGroup = new FormGroup({})

     constructor(
        private activatedRoute:ActivatedRoute,
        private courseService:UserService,
        private router:Router  
      ){}

     ngOnInit(){
          this.CourseForm = new FormGroup({
              _id: new FormControl(),
              coursename: new FormControl(),
              courseprice: new FormControl()
          })
         
          this.activatedRoute.paramMap.subscribe({
            next:(params)=>{
                this.id = params.get('id')
                this.courseService.getbookDetailsById(this.id).subscribe({
                    next:(response)=>{
                        this.CourseForm.patchValue(response)
                    },
                    error:(reason)=>{
                        console.log(reason)
                    }
                })
            }
         })
         
     }
     updateCourse(){
          this.courseService.updateBookRecord(this.CourseForm.value).subscribe({
               next:(response)=>{
                       alert(`Record No ${this.id} updated successfully`)
                       this.router.navigate(['/book'])
               },
               error:(reason)=>{
                    console.log(reason)
               }
          })
     }
}
