import { Component, HostListener } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false; // Zmienna do kontrolowania stanu menu
  isNavbarVisible = false; // Zmienna do kontrolowania widoczności navbaru

  // Nasłuchiwanie na zdarzenie scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isNavbarVisible = scrollY > 50; // Pokazuje navbar po przewinięciu o więcej niż 50px
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Zmiana stanu menu
  }
}
