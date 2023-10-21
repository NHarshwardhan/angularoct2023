import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interface/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    
     UserForm: FormGroup = new FormGroup({})

    //  Router Service has a method that allow us to navigate one component to another component programmatically.
     constructor(
         private userService: UserService,
         private router:Router
         
         ){}

     ngOnInit(){
         this.UserForm = new FormGroup({
                  name: new FormControl(),
                  username: new FormControl(),
                  email: new FormControl()
         })
     }
     createRecord(){
        this.userService.createUserRecord(this.UserForm.value).subscribe({
             next:(response)=>{
                   alert('Record Created Successfully')
                   this.router.navigate(['users'])
             },
             error:(reason)=>{
                 console.log(reason)
             }
        })
     }

     canExit(){
          if(this.UserForm.value.name){
            if(confirm('Are you sure to leave this page?')){
                return true
            }
            else{
               return false
            }
          }
          else{
              return true
          }
     }
}
