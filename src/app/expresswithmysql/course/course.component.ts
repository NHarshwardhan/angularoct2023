import { Component } from '@angular/core';
import { ICourse } from '../icourse';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
    
  courses: ICourse[] = []
  users:any
  constructor(private courseService: CourseService){}

  ngOnInit(){
      this.courseService.getAllCourses().subscribe({
          next:(response)=>{
              this.courses = response
          },
          error:(reason)=>{
               console.log(reason)
          }
      })

      this.courseService.getUserList().subscribe({
          next:(response)=>{
              this.users = response
          },
          error:(reason)=>{
              
          }
      })
  }
    
}
