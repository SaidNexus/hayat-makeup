import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBannerComponent {
  readonly heroBannerImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248204/hayat-makeup/hero-Banner.jpg';
}
