import { CanDeactivateFn } from '@angular/router';
import { AddUserComponent } from '../View/add-user/add-user.component';

export const leaveRouteGuard: CanDeactivateFn<AddUserComponent> = (component:AddUserComponent, currentRoute, currentState, nextState) => {
  
  return component.canExit();
     
};
