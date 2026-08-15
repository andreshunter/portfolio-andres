import { Component, EventEmitter, Output } from '@angular/core';
import { PROFILE } from '../../core/data/profile';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  @Output() contactRequested = new EventEmitter<void>();

  profile = PROFILE;

  openContact() {
    this.contactRequested.emit();
  }
}
