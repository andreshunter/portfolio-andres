import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  @Output() contactRequested = new EventEmitter<void>();

  menuOpen = false;


  constructor(
    public themeService: ThemeService
  ){}

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(){
    this.menuOpen = false;
  }

  openContact() {
    this.contactRequested.emit();
  }
}