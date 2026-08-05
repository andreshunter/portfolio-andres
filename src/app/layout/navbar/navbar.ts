import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {

   menuOpen = false;

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

}
