import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideArrowLeft } from '@lucide/angular';

@Component({
  selector: 'app-looks-promo',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './looks-promo.component.html',
  styleUrl: './looks-promo.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LooksPromoComponent {
  private readonly router = inject(Router);

  readonly promoImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248247/hayat-makeup/looks/looks-promo.png';
  readonly arrowLeftIcon = LucideArrowLeft;

  navigateToOffers(): void {
    this.router.navigateByUrl('/offers');
  }
}
