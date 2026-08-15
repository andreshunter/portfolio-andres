import { Component, Input } from '@angular/core';
import { SERVICES } from '../../core/data/services';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  @Input() compact = false;
  services = SERVICES;
}
