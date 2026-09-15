import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBannerComponent implements OnInit, OnDestroy {
  @Input() config?: any;

  currentIndex = 0;
  private intervalId: any;
  private cdr = inject(ChangeDetectorRef);

  readonly fallbackHeroImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248204/hayat-makeup/hero-Banner.jpg';

  onImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.fallbackHeroImage) {
      target.src = this.fallbackHeroImage;
    }
  }

  get slides(): any[] {
    if (this.config?.slides && this.config.slides.length > 0) {
      return this.config.slides;
    }
    if (this.config?.image) {
      return [{ id: '1', image: this.config.image, title: this.config.title, titleAr: this.config.titleAr, titleEn: this.config.titleEn }];
    }
    return [{
      id: 'default',
      image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248204/hayat-makeup/hero-Banner.jpg',
      title: 'جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج',
      titleAr: 'جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج',
      titleEn: 'Your Beauty Shines with Hayat\nFinest Makeup Collection'
    }];
  }

  get currentSlide(): any {
    return this.slides[this.currentIndex] || this.slides[0];
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.intervalId = setInterval(() => {
        if (this.slides.length > 1) {
          this.currentIndex = (this.currentIndex + 1) % this.slides.length;
          this.cdr.markForCheck();
        }
      }, 5000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setSlide(index: number) {
    this.currentIndex = index;
    this.cdr.markForCheck();
  }
}
