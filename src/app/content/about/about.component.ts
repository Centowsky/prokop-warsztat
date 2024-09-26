import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from '../widgets/google-map/google-map.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GoogleMapsModule, GoogleMapComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
