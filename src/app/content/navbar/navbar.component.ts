import { Component, HostListener } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from '../../../services/scroll.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgClass, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
  }

  faPhone = faPhone;

  isMenuOpen = false;
  isNavbarVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isNavbarVisible = scrollY > 15;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
