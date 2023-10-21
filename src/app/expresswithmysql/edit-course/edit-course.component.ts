import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
    
     id: string | null = ''
     CourseForm: FormGroup = new FormGroup({})

     constructor(
        private activatedRoute:ActivatedRoute,
        private courseService:CourseService,
        private router:Router  
      ){}

     ngOnInit(){
          this.CourseForm = new FormGroup({
              id: new FormControl(),
              coursename: new FormControl(),
              courseprice: new FormControl()
          })
         
          this.activatedRoute.paramMap.subscribe({
            next:(params)=>{
                this.id = params.get('id')
                this.courseService.getCourseByid(this.id).subscribe({
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
          this.courseService.updateCourseData(this.CourseForm.value).subscribe({
               next:(response)=>{
                       alert(`Record No ${this.id} updated successfully`)
                       this.router.navigate(['/course'])
               },
               error:(reason)=>{
                    console.log(reason)
               }
          })
     }
}
