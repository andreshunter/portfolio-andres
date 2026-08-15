import { Component, HostListener } from '@angular/core';
import { CERTIFICATES } from '../../core/data/certificates';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent {
  certificates = CERTIFICATES;
  currentSlide = 0;

  get visibleCount() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  }

  get maxSlide() {
    return Math.max(0, this.certificates.length - this.visibleCount);
  }

  get slidePositions() {
    return Array.from({ length: this.maxSlide + 1 }, (_, index) => index);
  }

  next() {
    this.currentSlide = this.currentSlide >= this.maxSlide ? 0 : this.currentSlide + 1;
  }

  previous() {
    this.currentSlide = this.currentSlide <= 0 ? this.maxSlide : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = Math.min(index, this.maxSlide);
  }

  @HostListener('window:resize')
  onResize() {
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = this.maxSlide;
    }
  }
}
