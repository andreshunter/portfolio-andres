import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CONTACTS } from '../core/data/contact';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss'
})
export class ContactModalComponent {
  @Output() closed = new EventEmitter<void>();

  contacts = CONTACTS;

  close() {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
