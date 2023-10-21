import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../Guard/auth.guard';
import { protectChildRouteGuard } from '../Guard/protect-child-route.guard';
import { AddressUserInfoComponent } from '../View/address-user-info/address-user-info.component';
import { PersonalUserInfoComponent } from '../View/personal-user-info/personal-user-info.component';
import { UserDetailsComponent } from '../View/user-details/user-details.component';
import { UserComponent } from '../View/user/user.component';
import { ViewNotFoundComponent } from '../View/view-not-found/view-not-found.component';

const routes: Routes = [
  {path:'', component: UserComponent, canActivate:[authGuard]},
  {

    path:'details/:id', component: UserDetailsComponent,
    canActivateChild:[protectChildRouteGuard],
    children:[      
       {path:'Personal/:id', component:PersonalUserInfoComponent}, 
       {path:'Address/:id', component:AddressUserInfoComponent},
     
    ]
   
 }, 
   
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
