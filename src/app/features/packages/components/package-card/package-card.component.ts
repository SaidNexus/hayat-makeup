import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronLeft,
  LucideShoppingBag,
  LucideTag,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { PackageItem } from '../featured-package/featured-package.component';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageCardComponent {
  @Input({ required: true }) packageItem!: PackageItem;

  private readonly cartService = inject(CartService);

  readonly shoppingBagIcon = LucideShoppingBag;
  readonly tagIcon = LucideTag;
  readonly chevronLeftIcon = LucideChevronLeft;

  onAddToCart(): void {
    this.cartService.addToCart({
      ...this.packageItem,
      id: `pkg-${this.packageItem.id}`,
      quantity: 1,
    });
  }
}
