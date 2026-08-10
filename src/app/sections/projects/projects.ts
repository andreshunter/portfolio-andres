import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {

  projects = [
  {
    title: 'Asistente Inteligente',
    image: 'images/project1.jpg',
    description: '...',
    technologies: ['Python', 'Django', 'OpenAI'],
    github: 'https://...',
    demo: 'https://...'
  }
];
}
