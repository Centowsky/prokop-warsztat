import { Component } from '@angular/core';
import { ScrollDownComponent } from '../buttons/scroll-down/scroll-down.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [ScrollDownComponent],
})
export class HeaderComponent {}
