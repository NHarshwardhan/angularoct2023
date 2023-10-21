import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MDFComponent {
  
    loginForm: FormGroup = new FormGroup({})
    notAllowednames = ["Admin","Nishant"]
   
    ngOnInit(){
        this.loginForm = new FormGroup({
             username: new FormControl(null, [Validators.required,this.NaNames.bind(this)]),
             email: new FormControl(null,[Validators.required,Validators.minLength(4)],this.NaEmail),
             password: new FormControl(),

             address: new FormGroup({
                  city: new FormControl(),
                  state: new FormControl(),
                  pincode: new FormControl()
             }),

             skills: new FormArray([
                  new FormControl(null),
              
             ])


        }) 
    }
    // ---- Add Dynamic Control---------------------

    get skills(){
        return this.loginForm.get('skills') as FormArray
    }

    onAddSkill(){
        (<FormArray>this.loginForm.get('skills')).push(new FormControl(null))
    }

    onRemoveSkill(index: number){
      (<FormArray>this.loginForm.get('skills')).removeAt(index)
    }
    // ---------------------------------



    loginProcess(){
        console.log(this.loginForm.value)
    }

    // Custom synchronous Validator
    NaNames(control:AbstractControl):any{ //control => username 
            if(this.notAllowednames.indexOf(control.value)!== -1){
                 return {"nameIsNotAllowed":true}
            }
            return null
    }

    // Custom Asynchronous Validator
    NaEmail(control:AbstractControl):any{
       const myResponse = new Promise((resolve,reject)=>{              
                              setTimeout(()=>{
                                        if(control.value === 'info@gmail.com'){
                                                resolve({'emailNotAllowed':true})
                                        }
                                        else{
                                                resolve(null)
                                        }
                                      
                                  },3000)
                              })

       return myResponse
    }
}
