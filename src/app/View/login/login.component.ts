import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { UserService } from 'src/app/Services/user.service';
import { AuthjwtService } from 'src/app/authjwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup = new FormGroup({})

  constructor(
      private router:Router,
      private userService:UserService,
      private jwtService:AuthjwtService
    ){}

  ngOnInit(){
      this.loginForm = new FormGroup({
      
        email: new FormControl(null,[Validators.required,Validators.minLength(4)]),
        password: new FormControl(),
    
      }) 
      let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']"); 
      tooltipelements.forEach((el) => { 
                                 new bootstrap.Tooltip(el); 
                              });
    let popoverelements = document.querySelectorAll("[data-bs-toggle='popover']"); 
      popoverelements.forEach((el) => { 
                                 new bootstrap.Popover(el); 
                              });  
  }

  loginProcess(){
       let email = this.loginForm.value.email
       let password = this.loginForm.value.password

       if(email && password){
            // sessionStorage.setItem('user',email)
            this.userService.userInfo.next(email)
            this.router.navigate(['home'],{skipLocationChange:true})
       }
       else{
          alert('Email / Password does not match')
       }
      // ---------------------------------------------

      // this.jwtService.loginUser(this.loginForm.value).subscribe({
      //     next:(response)=>{
      //         alert('Login Successfully')
      //         // sessionStorage.setItem('token',response.auth_token)
      //         this.userService.token.next(response.auth_token)
      //         console.log(response)
      //     },
      //     error:(reason)=>{
      //          console.log(reason.message)
      //     }
      // })
  }
}
