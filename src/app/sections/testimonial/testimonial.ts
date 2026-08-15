import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonials } from '../../core/data/testimonial';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('contentDiv') contentDiv: ElementRef | undefined;
  
  Testimonials = Testimonials;
  currentIndex = 0;
  maxHeight: string = 'auto';
  private autoRotateInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoRotate();
  }

  ngAfterViewInit() {
    this.calculateMaxHeight();
  }

  ngOnDestroy() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  calculateMaxHeight() {
    if (!this.contentDiv) return;
    
    const element = this.contentDiv.nativeElement;
    const originalIndex = this.currentIndex;
    let maxH = 0;
    let processed = 0;

    const checkHeight = (index: number) => {
      this.currentIndex = index;
      this.cdr.detectChanges();
      
      Promise.resolve().then(() => {
        const height = element.offsetHeight;
        if (height > maxH) {
          maxH = height;
        }
        processed++;
        
        if (processed === this.Testimonials.length) {
          // Todos procesados, establecer la altura y restaurar índice
          this.currentIndex = originalIndex;
          this.maxHeight = maxH > 0 ? (maxH + 10) + 'px' : 'auto';
          this.cdr.detectChanges();
        } else {
          // Procesar el siguiente
          checkHeight(processed);
        }
      });
    };
    
    checkHeight(0);
  }

  startAutoRotate() {
    this.autoRotateInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.Testimonials.length;
      this.cdr.markForCheck();
    }, 10000);
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
    this.cdr.markForCheck();
    // Reiniciar el intervalo para que comience de nuevo desde esta posición
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
    this.startAutoRotate();
  }

  isActive(index: number): boolean {
    return this.currentIndex === index;
  }
}
