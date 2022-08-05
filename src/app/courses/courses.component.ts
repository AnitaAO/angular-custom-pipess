import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>{{ title }}</h1>
    <p>{{text | summary: 10}}</p>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "Custom Pipe";
  text = "American is very far away yet by foot I must get to America. My faith is small but I don't try it on small thins. That is why you see me the way you do, you judged me incorrectly alas. Oh ye of little faith!"

  constructor() { }

  ngOnInit() {
  }

}