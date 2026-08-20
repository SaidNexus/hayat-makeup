import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-promo',
  standalone: true,
  templateUrl: './wishlist-promo.component.html',
  styleUrl: './wishlist-promo.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistPromoComponent {
  private readonly router = inject(Router);

  readonly promoImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248365/hayat-makeup/promo.png';

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
