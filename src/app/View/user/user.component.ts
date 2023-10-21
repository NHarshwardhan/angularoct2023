import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/Interface/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   
    users: IUser[] = []
    subs: Subscription | undefined

    constructor(private userService: UserService){}

    ngOnInit(){
      this.subs =  this.userService.getUserList().subscribe({
           next:(response)=>{
               this.users = response
           },
           error:(reason)=>{
              console.log(reason)
           }
       })     
    }

    ngOnDestroy(){
         this.subs?.unsubscribe()
    }
}
