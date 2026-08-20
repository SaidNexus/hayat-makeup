import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-hero',
  standalone: true,
  templateUrl: './offers-hero.component.html',
  styleUrl: './offers-hero.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersHeroComponent {
  private readonly router = inject(Router);

  readonly promoBannerImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248327/hayat-makeup/offers/offers-hero.png';

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
