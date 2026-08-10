import { Component } from '@angular/core';
import { EXPERIENCES } from '../../core/data/experiences';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
