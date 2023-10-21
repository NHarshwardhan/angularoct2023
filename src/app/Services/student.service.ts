import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

// Register at component level
@Injectable()
export class StudentService {

  constructor() { }

  getStudentDetails(){
     return [ 
           {id:1, name:'Rose',gender:'female',dob: new Date(),salary:4000,isAdmin:false},
           {id:2, name:'Jasmine',gender:'female',dob: new Date(),salary:5000,isAdmin:true},
           {id:3, name:'Kerry',gender:'female',dob: new Date(),salary:7000,isAdmin:false},
           {id:4, name:'John',gender:'male',dob: new Date(),salary:8000,isAdmin:false},
      ]
     
    }
}
