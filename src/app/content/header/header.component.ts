import { Component } from '@angular/core';
import { ScrollDownComponent } from '../buttons/scroll-down/scroll-down.component';
import { ScrollService } from '../../../services/scroll.services';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [ScrollDownComponent],
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
  }
}
