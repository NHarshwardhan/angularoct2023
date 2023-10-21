import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from '../View/add-user/add-user.component';
import { AddressUserInfoComponent } from '../View/address-user-info/address-user-info.component';
import { EditUserComponent } from '../View/edit-user/edit-user.component';
import { PersonalUserInfoComponent } from '../View/personal-user-info/personal-user-info.component';
import { UserDetailsComponent } from '../View/user-details/user-details.component';
import { UserComponent } from '../View/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    PersonalUserInfoComponent,
    AddressUserInfoComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule {

   constructor(){
       console.log('User Module loaded')
   }
 }
