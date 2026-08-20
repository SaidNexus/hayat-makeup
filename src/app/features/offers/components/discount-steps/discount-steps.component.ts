import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideBadgePercent,
  LucideGift,
  LucideShoppingBag,
  LucideIcon,
} from '@lucide/angular';

export interface DiscountStep {
  icon: LucideIcon;
  title: string;
}

@Component({
  selector: 'app-discount-steps',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './discount-steps.component.html',
  styleUrl: './discount-steps.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscountStepsComponent {
  private readonly router = inject(Router);

  readonly steps: DiscountStep[] = [
    {
      icon: LucideBadgePercent,
      title: 'احصلي على خصم تلقائي',
    },
    {
      icon: LucideShoppingBag,
      title: 'أضيفي قطعتين إلى السلة',
    },
    {
      icon: LucideGift,
      title: 'ينطبق على منتجات مختارة',
    },
  ];

  readonly separators = ['<', '>'];

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
