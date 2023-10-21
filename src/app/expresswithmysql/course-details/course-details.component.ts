import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { ICourse } from '../icourse';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
    
    id: string | null = ''
    course: ICourse | undefined

    constructor(
      private activatedRoute:ActivatedRoute,
      private courseService:CourseService,
      private router:Router
      ){}

    ngOnInit(){
        this.activatedRoute.paramMap.subscribe({
            next:(params)=>{
               this.id =  params.get('id')
               this.courseService.getCourseByid(this.id).subscribe({
                 next:(response)=>{
                  console.log(response)
                      this.course = response
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

            this.courseService.deleteCourseData(this.id).subscribe({
                 next:(response)=>{
                    alert('Record deleted successfully')
                    this.router.navigate(['/course'])
                 },
                 error:(reason)=>{
                     console.log(reason)
                 }
            })
         }
    }

}
