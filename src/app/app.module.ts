import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseModule } from './courses/course/course.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, CourseModule],
  declarations: [ AppComponent, CoursesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
