import { Component } from '@angular/core';
import { TECHNOLOGIES } from '../../core/data/technologies';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {

  technologies = TECHNOLOGIES;
  
}
