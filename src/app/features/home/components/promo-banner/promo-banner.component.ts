import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideTag } from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe, TranslatePipe],
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoBannerComponent {
  @Input() config?: any;
  private readonly router = inject(Router);

  readonly defaultBannerImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248206/hayat-makeup/hero.png';
  readonly tagIcon = LucideTag;

  get bannerImage(): string {
    return this.config?.image || this.defaultBannerImage;
  }

  onImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultBannerImage) {
      target.src = this.defaultBannerImage;
    }
  }

  navigateToOffers(): void {
    this.router.navigateByUrl('/offers');
  }
}
