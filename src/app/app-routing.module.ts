import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './View/home/home.component';
import { AboutComponent } from './View/about/about.component';
import { PostComponent } from './ApiDemo/post/post.component';
import { AddPostComponent } from './ApiDemo/add-post/add-post.component';
import { ViewNotFoundComponent } from './View/view-not-found/view-not-found.component';
import { LoginComponent } from './View/login/login.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { CheckChartComponent } from './check-chart/check-chart.component';
import { CourseComponent } from './expresswithmysql/course/course.component';
import { CourseDetailsComponent } from './expresswithmysql/course-details/course-details.component';
import { AddCourseComponent } from './expresswithmysql/add-course/add-course.component';
import { EditCourseComponent } from './expresswithmysql/edit-course/edit-course.component';
import { BookSComponent } from './expresswithmongodb/book-s/book-s.component';
import { AddBookComponent } from './expresswithmongodb/add-book/add-book.component';
import { BookDetailsComponent } from './expresswithmongodb/book-details/book-details.component';
import { EditBookComponent } from './expresswithmongodb/edit-book/edit-book.component';
import { RegisterComponent } from './register/register.component';
import { SecureRouteComponent } from './secure-route/secure-route.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component: HomeComponent},  
  {path:'about', component: AboutComponent},
  {path:'posts', component: AddPostComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'secure', component: SecureRouteComponent},
  {path:'course', component:CourseComponent},
  {path:'book', component:BookSComponent},
  {path:'book/create', component:AddBookComponent},
  {path:'book/details/:id', component:BookDetailsComponent},
  {path:'book/edit/:id', component:EditBookComponent},

  {path:'course/create',component:AddCourseComponent},
  {path:'course/edit/:id',component:EditCourseComponent},
  // {path:'chart', component:BarChartComponent},
  // {path:'chart', component:LineChartComponent},
  // {path:'chart', component:PieChartComponent},
  {path:'chart', component:CheckChartComponent},
  {path:'users', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  
  // Wild card route to handle non-exisitng route
  {path:'**',component:ViewNotFoundComponent},  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
