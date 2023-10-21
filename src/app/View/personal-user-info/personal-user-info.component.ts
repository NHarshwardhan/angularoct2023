import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/Interface/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-personal-user-info',
  templateUrl: './personal-user-info.component.html',
  styleUrls: ['./personal-user-info.component.css']
})
export class PersonalUserInfoComponent {
    
    id: string | null = ''
    user: IUser | undefined
    constructor(
       private activatedRoute:ActivatedRoute,
       private userService:UserService
       ){}

    ngOnInit(){
      console.log('inside method')
         this.activatedRoute.paramMap.subscribe({
           next:(params)=>{
               this.id = params.get('id')
               this.userService.getUserListByid(this.id).subscribe({
                    next:(response)=>{
                        this.user = response
                    },
                    error:(reason)=>{
                         console.log(reason)
                    }
               })
           }
         })
    }
}
