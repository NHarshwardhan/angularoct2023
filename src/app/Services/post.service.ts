import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, delay, retry, retryWhen,take,catchError,throwError,map,filter } from 'rxjs';
import { IPost } from '../Interface/ipost';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiurl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }


  // getPostsList(): Observable<any>{
  //   return this.http.get<IPost[]>(this.apiurl).pipe(catchError(this.handleError))
  //   // return this.http.get<IPost[]>(this.apiurl).pipe(retryWhen(errors=>errors.pipe(take(3),delay(3000))))
  // }

  // getPostsList(): Observable<any>{
  //   return this.http.get<IPost[]>(this.apiurl).pipe(catchError(this.handleError))

  // }

  getPostsList(): Observable<any>{
    return this.http.get<IPost[]>(this.apiurl).pipe(map(apidata=>apidata.filter(data=>data.id < 4)))
    
  }

  handleError(error: HttpErrorResponse):any{
       let message = `Error Code: ${error.status} \n Error Message = ${error.statusText}`
       return throwError(message)
  }

  CreateNewRecord(postFormData:IPost):Observable<IPost>{
      return this.http.post<IPost>(
        this.apiurl,
        postFormData,
        {
          headers: new HttpHeaders({
            'content-type':'application/json'
            
          })
        }
      )
  }

  updatePostRecord(postFormData: IPost):Observable<IPost>{
      return this.http.put<IPost>(
         `${this.apiurl}/${postFormData.id}`,
         postFormData,
         {
           headers: new HttpHeaders({'content-type':'application/json'})
         }

      )
  }

  deletePostRecord(id: number):Observable<IPost>{
     return this.http.delete<IPost>(`${this.apiurl}/${id}`)
  }


}
