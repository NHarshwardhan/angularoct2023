import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthjwtService } from '../authjwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
     UserForm: FormGroup = new FormGroup({})

     constructor(private jwtService:AuthjwtService){}

     ngOnInit(){
        this.UserForm = new FormGroup({
              name: new FormControl(),
              email: new FormControl(),
              password: new FormControl()
        })
       
     }

     registerProcess(){
         this.jwtService.registerUser(this.UserForm.value).subscribe({
            next:(response)=>{
                 alert('User Registered Successfully')
                 console.log(response)
            },
            error:(reason)=>{
               alert(reason.message)
            }
         })
     }
}
