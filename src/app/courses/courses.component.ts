import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse = null
  courses = null

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCouse()
    this.loadCourses()
  }

  resetSelectedCouse() {    
    const emptyCourse = {
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.currentCourse = emptyCourse
  }

  selectCourse(course) {
    console.log("Selected: ", course)
    this.currentCourse = course
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
      .subscribe(result => this.loadCourses())
  }

  loadCourses() {
    this.coursesService.all(). // retorna um Observable
    subscribe(courses => this.courses = courses) // .subcribe() parecido com .then()
  }

  saveCourse(course) {
    if(course.id) {
      this.coursesService.update(course)
        .subscribe(result => this.loadCourses())
    } else {
      this.coursesService.create(course)
        .subscribe(result => this.loadCourses())
    }
    this.resetSelectedCouse()  
  }

}
