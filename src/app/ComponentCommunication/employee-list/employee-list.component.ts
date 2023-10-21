import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
     selectedRadioButton = 'All'
     employees:any[] = [
        { id:101 , name : 'Peter' , gender:'Male', age:23},
        { id:102 , name : 'Parker' , gender:'Male', age:23},
        { id:103 , name : 'Rose' , gender:'Female', age:33},
        { id:104 , name : 'Kerry' , gender:'Female', age:13},
        { id:105 , name : 'Jasmine' , gender:'Female', age:43},
     ]

     getTotalRecord(){
         return this.employees.length
     }

     getTotalMaleRecord(){
          return this.employees.filter((emp:any)=> emp.gender==='Male').length;
     }

     getTotalFemaleRecord(){
      return this.employees.filter((emp:any)=> emp.gender==='Female').length;
     }

     callParentmethod(childRadioButtonSelected: string){
          console.log(childRadioButtonSelected)  
          this.selectedRadioButton = childRadioButtonSelected
     }

     
}
