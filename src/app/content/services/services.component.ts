import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Mechanika samochodowa' },
    { id: 2, name: 'Szybkie naprawy' },
    { id: 3, name: 'Wulkanizacja' },
    { id: 4, name: 'Klimatyzacje' },
    { id: 5, name: 'Naprawy zawieszenia' },
    { id: 6, name: 'Konserwacje pojazdów' },
    { id: 7, name: 'Diagnostyka komputerowa' },
    { id: 8, name: 'Wymiana oleju' },
    { id: 9, name: 'Naprawy pokolizyjne' },
    { id: 10, name: 'Auta zastępcze' },
  ];
}
