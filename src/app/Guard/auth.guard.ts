import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const userService = inject(UserService)
  const router = inject(Router)

  if(!userService.isLoggedIn()){
      alert('You are not authorised to visit this route, Please login first')
      router.navigate(['login'])
      return false
  }

  return true;
};
