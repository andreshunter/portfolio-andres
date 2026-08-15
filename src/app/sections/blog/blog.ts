import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {
  article = {
    title: 'Cómo la IA está transformando el análisis de datos',
    excerpt: 'Principales tendencias y herramientas que están cambiando la forma de trabajar con datos.',
    date: '2026'
  };
}
