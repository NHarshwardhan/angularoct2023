import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthjwtService {

  apiurl = 'http://localhost:5000/api/user'
  token = ''

  constructor(private http:HttpClient, private userService:UserService) {
        this.userService.token.subscribe({
            next:(tokenData)=>{
                 this.token = tokenData
            }
        })
   }

  registerUser(userData:any):Observable<any>{
       return this.http.post(
          `${this.apiurl}/register`,
           userData,
           {
            headers: new HttpHeaders({'content-type':'application/json'})
           }
       )
  }

  loginUser(userData:any):Observable<any>{
      return this.http.post(
          `${this.apiurl}/login`,
          userData,
          {
            headers: new HttpHeaders({'content-type':'application/json'})
          }
      )
  }

  secureUrl():Observable<any>{
     return this.http.get(`${this.apiurl}/list`,{
        headers: new HttpHeaders({
            //  'Authorization':`Bearer ${sessionStorage.getItem('token')}`
            'Authorization':`Bearer ${this.token}`
        })
     })
  }

 
}
