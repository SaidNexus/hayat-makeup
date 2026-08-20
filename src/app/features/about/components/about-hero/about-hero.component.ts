import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  templateUrl: './about-hero.component.html',
  styleUrl: './about-hero.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutHeroComponent {
  readonly logoImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248206/hayat-makeup/hero.png';
  readonly aboutHeroImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248074/hayat-makeup/about/about-hero.png';
}
