import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent {
   
    // loginProcess(loginFormData:NgForm){
    //     console.log(loginFormData.value)
    // }

    loginProcess(loginFormData:any){
      console.log(loginFormData)
  }
}
