import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = {
    lat: 52.99280599679702,
    lng: 15.192488457669757,
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: 52.99280599679702,
    lng: 15.192488457669757,
  };

  updateMarkerPosition(lat: number, lng: number): void {
    this.markerPosition = { lat, lng };
  }

  zoom = 13;
}
