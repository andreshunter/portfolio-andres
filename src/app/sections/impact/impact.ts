import { Component } from '@angular/core';

@Component({
  selector: 'app-impact',
  imports: [],
  templateUrl: './impact.html',
  styleUrl: './impact.scss'
})
export class ImpactComponent {
  stats = [
    {
      value: '>3 h → 1–5 min',
      label: 'Tiempo de algunas consultas antes y después de optimizarlas',
      icon: 'bi-stopwatch'
    },
    {
      value: 'Angular 11 → 22',
      label: 'Modernización de una aplicación manteniendo su funcionamiento',
      icon: 'bi-arrow-repeat'
    },
    {
      value: 'Soporte',
      label: 'Acompañamiento y resolución de incidencias en proyectos',
      icon: 'bi-headset'
    },
    {
      value: 'Eficiencia',
      label: 'Automatización y mejora de procesos con datos y tecnología',
      icon: 'bi-lightning-charge'
    }
  ];
}
