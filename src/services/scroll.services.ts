import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {}

  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    if (element) {
      this.scrollToElement(element);
    }
  }

  private __getElementById(id: string): HTMLElement | null {
    // console.log('element id : ', id);
    const element = document.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offset = 5 * 16;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
}
