import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makeup-guide-hero',
  standalone: true,
  templateUrl: './makeup-guide-hero.component.html',
  styleUrl: './makeup-guide-hero.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MakeupGuideHeroComponent {
  private readonly router = inject(Router);

  readonly heroImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248185/hayat-makeup/guide/guide-hero.png';

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
