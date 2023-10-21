import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
 
    CourseForm: FormGroup = new FormGroup({})

    constructor(
        private courseService:CourseService,
        private router:Router
        ){}

    ngOnInit(){
        this.CourseForm = new FormGroup({
             coursename: new FormControl(),
             courseprice: new FormControl()
        })
    }

    registerCourse(){
          this.courseService.addCourse(this.CourseForm.value).subscribe({
               next:(response)=>{
                    alert('Record added successfully')
                    this.router.navigate(['/course'])
               },
               error:(reason)=>{
                  console.log(reason)
               }
          })
    }
}
