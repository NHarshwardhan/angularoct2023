import { Component } from '@angular/core';
import { StudentService } from './Services/student.service';
import { UserService } from './Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2023oct';
  
  constructor(public userService: UserService, private router:Router){}
  
  navigate(pageName: string){
   
    this.router.navigate([`/${pageName}`], { skipLocationChange: true });
  }
  
}
