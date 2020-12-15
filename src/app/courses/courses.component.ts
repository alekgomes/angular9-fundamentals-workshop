import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse = null
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Learn the fundamentals of React',
      percentComplete: 50,
      favorite: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCouse()
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
