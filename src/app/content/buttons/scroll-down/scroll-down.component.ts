import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.services';

@Component({
  selector: 'app-scroll-down',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './scroll-down.component.html',
  styleUrl: './scroll-down.component.scss',
})
export class ScrollDownComponent {
  faArrowDown = faArrowDown;

  constructor(private scrollService: ScrollService) {}

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
  }
}
