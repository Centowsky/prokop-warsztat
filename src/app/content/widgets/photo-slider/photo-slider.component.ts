import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PhotoSlider implements OnInit, OnDestroy {
  images: string[] = [
    '../../../../assets/images/carousel/slide1.jpg',
    '../../../../assets/images/carousel/slide2.jpg',
    '../../../../assets/images/carousel/slide3.jpg',
  ];
  currentSlide: number = 0;
  slideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  resetAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.resetAutoSlide();
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.resetAutoSlide();
  }

  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
    this.resetAutoSlide();
  }
}
