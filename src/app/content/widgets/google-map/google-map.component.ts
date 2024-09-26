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
    lat: 52.99416978937261,
    lng: 15.227764946252064,
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: 52.99542853420131,
    lng: 15.219122766975847,
  };

  updateMarkerPosition(lat: number, lng: number): void {
    this.markerPosition = { lat, lng };
  }

  zoom = 11;
}
