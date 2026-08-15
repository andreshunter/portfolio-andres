import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  @Output() contactRequested = new EventEmitter<void>();

  currentYear = new Date().getFullYear();

  openContact() {
    this.contactRequested.emit();
  }
}
