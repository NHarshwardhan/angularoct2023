import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  UserForm: FormGroup = new FormGroup({})

  id: string | null = '' 
  
  constructor(
          private activatedRoute:ActivatedRoute,
          private userService: UserService,
          private router:Router
          ){}


     ngOnInit(){
          this.UserForm = new FormGroup({
                  id: new FormControl(),
                  name: new FormControl(),
                  username: new FormControl(),
                  email: new FormControl()
          })

          this.activatedRoute.paramMap.subscribe({
               next:(params)=>{
                  this.id=params.get('id');
                  this.userService.getUserListByid(this.id).subscribe({
                    next:(response)=>{
                        this.UserForm.patchValue(response)
                    },
                    error:(reason)=>{
                        console.log(reason)
                    }
                  })
               }
          })
     }

     updateRecord(){
        this.userService.updateUserRecord(this.UserForm.value).subscribe({
             next:(response)=>{
                   alert('Record has updated successfully')
                   this.router.navigate(['users'])
             },
             error:(reason)=>{
                  console.log(reason)
             }
        })
     }
}
