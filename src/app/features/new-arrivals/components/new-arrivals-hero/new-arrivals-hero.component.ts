import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideChevronLeft } from '@lucide/angular';

@Component({
  selector: 'app-new-arrivals-hero',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './new-arrivals-hero.component.html',
  styleUrl: './new-arrivals-hero.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsHeroComponent {
  private readonly router = inject(Router);

  readonly heroImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248303/hayat-makeup/new-arrivals-banner.png';
  readonly chevronLeftIcon = LucideChevronLeft;

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
