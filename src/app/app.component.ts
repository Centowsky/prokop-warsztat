import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './content/about/about.component';
import { HeaderComponent } from './content/header/header.component';
import { NavbarComponent } from './content/navbar/navbar.component';
import { StepsComponent } from './content/steps/steps.component';
import { ServicesComponent } from './content/services/services.component';
import { PhotoGalleryComponent } from './content/contact/contact.component';
import { WebAdrressComponent } from './content/web-adrress/web-adrress.component';
import { FooterComponent } from './content/footer/footer.component';
import { SpinnerComponent } from './content/widgets/spinner/spinner.component';

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
    ServicesComponent,
    PhotoGalleryComponent,
    WebAdrressComponent,
    FooterComponent,
    SpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit() {
    const isLoaded = localStorage.getItem('isLoaded');
    console.log(isLoaded);

    if (isLoaded === null || isLoaded === 'false') {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        localStorage.setItem('isLoaded', 'true');
      }, 1500);
    } else {
      this.isLoading = false;
    }
  }
}
