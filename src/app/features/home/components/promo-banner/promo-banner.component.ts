import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideTag } from '@lucide/angular';

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoBannerComponent {
  private readonly router = inject(Router);

  readonly promoBannerImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248363/hayat-makeup/promo-banner.jpg';
  readonly tagIcon = LucideTag;

  navigateToOffers(): void {
    this.router.navigateByUrl('/offers');
  }
}
