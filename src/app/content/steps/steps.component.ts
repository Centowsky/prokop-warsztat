import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [NgFor],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
})
export class StepsComponent {
  steps = [
    {
      number: 1,
      title: 'Zadzwoń do nas',
      description: 'Skontaktuj się telefonicznie lub przez formularz online.',
    },
    {
      number: 2,
      title: 'Opisz problem',
      description: 'Powiedz nam, co niepokoi Cię w Twoim samochodzie.',
    },
    {
      number: 3,
      title: 'Umów wizytę',
      description: 'Ustal dogodny termin na diagnostykę i naprawę.',
    },
    {
      number: 4,
      title: 'Przyjedź do warsztatu',
      description: 'Zadbamy o Twój pojazd, aby szybko wrócił na drogę!',
    },
  ];
}
