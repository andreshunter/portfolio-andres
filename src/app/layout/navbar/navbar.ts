import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {

  menuOpen = false;


  constructor(
    public themeService: ThemeService
  ){}

  toggleMenu(){

    this.menuOpen = !this.menuOpen;

  }
}