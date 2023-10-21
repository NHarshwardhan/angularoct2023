import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { HeaderComponent } from './header/header.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';

import {HttpClientModule} from '@angular/common/http';

import { TitlePipe } from './title.pipe';
import { ParentComponent } from './ComponentCommunication/parent/parent.component';
import { ChildComponent } from './ComponentCommunication/child/child.component';
import { EmployeeListComponent } from './ComponentCommunication/employee-list/employee-list.component';
import { EmployeeCountComponent } from './ComponentCommunication/employee-count/employee-count.component';
import { TDFComponent } from './Form/tdf/tdf.component';
import { MDFComponent } from './Form/mdf/mdf.component';
import { PostComponent } from './ApiDemo/post/post.component';
import { AddPostComponent } from './ApiDemo/add-post/add-post.component';
import { HomeComponent } from './View/home/home.component';
import { AboutComponent } from './View/about/about.component';
import { ViewNotFoundComponent } from './View/view-not-found/view-not-found.component';
import { LoginComponent } from './View/login/login.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { ChartBaseComponent } from './Charts/chart-base/chart-base.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './Charts/doughnut-chart/doughnut-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckChartComponent } from './check-chart/check-chart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
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
import { TodoComponent } from './Project/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitlePipe,
    ParentComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    TDFComponent,
    MDFComponent,
    PostComponent,
    AddPostComponent,
    HomeComponent,
    AboutComponent,
    ViewNotFoundComponent,
    
    LoginComponent,
         ChartBaseComponent,
         BarChartComponent,
         LineChartComponent,
         PieChartComponent,
         DoughnutChartComponent,
         CheckChartComponent,
         CourseComponent,
         CourseDetailsComponent,
         AddCourseComponent,
         EditCourseComponent,
         BookSComponent,
         AddBookComponent,
         BookDetailsComponent,
         EditBookComponent,
         RegisterComponent,
         SecureRouteComponent,
         TodoComponent,
    //component
    //pipe
    //directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //module
    ChartModule,
    AgChartsAngularModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})


export class AppModule { 

  constructor(){
    console.log('App Module Loaded..!')
  }
}
