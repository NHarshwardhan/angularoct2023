import { Component } from '@angular/core';
import { IStudent } from '../istudent';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[StudentService]
})
export class HeaderComponent {
    
   students: IStudent[] = []

   constructor(private stdService: StudentService){}

   ngOnInit(){
      this.students = this.stdService.getStudentDetails();
   }
      
}
