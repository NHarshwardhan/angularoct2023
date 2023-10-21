import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { UserService } from '../Services/user.service';

export const protectChildRouteGuard: CanActivateChildFn = (childRoute, state) => {
 
     const userService = inject(UserService)

     if(!userService.isAdmin()){
          alert(' Only admin allowed to visit this route')
          return false
     }
     return true
     
};
