import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from './icourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  apiurl = 'http://localhost:8000/api/courses'

  constructor(private http: HttpClient) { }
  
  getAllCourses():Observable<ICourse[]>{
      return this.http.get<ICourse[]>(this.apiurl)
  }

  getCourseByid(id: string | null):Observable<ICourse>{
     return this.http.get<ICourse>(`${this.apiurl}/${id}`)
  }

  addCourse(CourseFormData:ICourse):Observable<ICourse>{
     return this.http.post<ICourse>(
         this.apiurl,
         CourseFormData,
         {
            headers: new HttpHeaders({'content-type':'application/json'})
         }
     )
  }

  updateCourseData(CourseFormData:ICourse):Observable<ICourse>{
      return this.http.put<ICourse>(
          `${this.apiurl}/${CourseFormData.id}`,
          CourseFormData,
          {
              headers: new HttpHeaders({'content-type':'application/json'})
          }
      )
  }

  deleteCourseData(id: string| null):Observable<ICourse>{
     return this.http.delete<ICourse>(`${this.apiurl}/${id}`)
  }

  getUserList():Observable<any>{
       return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
