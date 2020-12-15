import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = [
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

  all(){
    return this.courses
  }

  find(courseId){
    
  }  

  create(course){
    console.log('CRAETE COURSE', course)
  }

  update(course){
    console.log('UPDATE COURSE', course)
  }

  delete(courseId){
    console.log('DELE COURSE', courseId)
  }
}
