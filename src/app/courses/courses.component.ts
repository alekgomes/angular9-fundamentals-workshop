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
    this.courses = this.coursesService.courses
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
    console.log(courseId)
  }

  saveCourse() {
    console.log("saveCoure")
  }

}
