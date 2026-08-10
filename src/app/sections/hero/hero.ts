import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/profile';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  profile = PROFILE;
}
