import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './content/about/about.component';
import { HeaderComponent } from './content/header/header.component';
import { NavbarComponent } from './content/navbar/navbar.component';
import { StepsComponent } from './content/steps/steps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    FontAwesomeModule,
    AboutComponent,
    StepsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prokop-warsztat';
}
