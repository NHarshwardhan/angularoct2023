import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../Interface/iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl = 'http://localhost:3000/users'

  constructor(private http: HttpClient,private router:Router) { }

  getUserList():Observable<IUser[]>{
     return this.http.get<IUser[]>(this.apiurl)
  }
  getUserListByid(id: string | null):Observable<IUser>{
        return this.http.get<IUser>(`${this.apiurl}/${id}`)   
  }

  createUserRecord(UserForm:IUser):Observable<IUser>{
     return this.http.post<IUser>(
         `${this.apiurl}`,
         UserForm,
         {
           headers: new HttpHeaders({'content-type':'application/json'})
         }
     )
  }
  updateUserRecord(UserForm:IUser):Observable<IUser>{
    return this.http.put<IUser>(
        `${this.apiurl}/${UserForm.id}`,
        UserForm,
        {
          headers: new HttpHeaders({'content-type':'application/json'})
        }
    )
 }

 deleteUserRecord(id: string| null):Observable<IUser>{
    return this.http.delete<IUser>(`${this.apiurl}/${id}`)
 }

 isLoggedIn(){
   //   return sessionStorage.getItem('token')
    let flag = 0
     this.token.subscribe({
        next:(user)=>{
             if(user){
                flag = 1
             }
             else{
                flag = 0
             }
        }
     })
     if(flag){
       return true
     }
     else{
      return false
     }
 }

 isAdmin(){
    let role = sessionStorage.getItem('user')
    if(role==='admin'){
       return true
    }
    else{
      return false
    }

 }
 logout(){
   //   sessionStorage.removeItem('token')
     this.token.next('')
     alert('Logout Successfully')
     this.router.navigate(['login'])
 }

 userInfo = new BehaviorSubject('')
 token = new BehaviorSubject<any>('')
//   ------------------------------------

apiurl2 = 'https://angularexpressmongodbapi-6dms.vercel.app/api/books'

getbookDetails():Observable<any>{
    return this.http.get(`${this.apiurl2}`)
}
getbookDetailsById(id:string | null):Observable<any>{
   return this.http.get(`${this.apiurl2}/${id}`)
}
createNewBook(BookData:any):Observable<any>{
   return this.http.post(
      `${this.apiurl2}`,
       BookData,
       {
         headers:new HttpHeaders({'content-type':'application/json'})
       }
   )
}
updateBookRecord(UserForm:any):Observable<any>{
   return this.http.put(
       `${this.apiurl2}/${UserForm._id}`,
       UserForm,
       {
         headers: new HttpHeaders({'content-type':'application/json'})
       }
   )
}
deleteBookRecord(id: string| null):Observable<any>{
   return this.http.delete(`${this.apiurl2}/${id}`)
}

}
