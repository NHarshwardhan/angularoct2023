import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/Interface/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {      
    user: IUser | undefined
    id: string | null = ''
    
    // ActivatedRoute service is used to obtain route parameter  
     constructor(
         private activatedRoute:ActivatedRoute,
         private userService: UserService,
         private router:Router
     ){}

     ngOnInit(){
         this.activatedRoute.paramMap.subscribe({
             next:(params)=>{
                this.id= params.get('id')
                this.userService.getUserListByid(this.id).subscribe({
                    next:(response)=>{
                         console.log(response)
                         this.user = response
                    },
                    error:(reason)=>{
                        console.log(reason)
                    }
                })
             }
         })
     }

     deleteRecord(){
          if(confirm('Are you sure to delete ?')){
              this.userService.deleteUserRecord(this.id).subscribe({
                   next:(response)=>{
                       alert('Record deleted successfully');
                       this.router.navigate(['users'])
                   },
                   error:(reason)=>{
                          console.log(reason)
                   }
              })
          }
     }


}
