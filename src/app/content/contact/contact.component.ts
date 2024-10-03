import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PhotoSlider } from '../widgets/photo-slider/photo-slider.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, PhotoSlider],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class PhotoGalleryComponent {
  email = 'biuro@autodiagnozabarlinek.pl';

  images = [
    '../../../assets/images/carousel/slide1.jpg',
    '../../../assets/images/carousel/slide2.jpg',
    '../../../assets/images/carousel/slide3.jpg',
  ];

  currentIndex = 0;

  get transform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
