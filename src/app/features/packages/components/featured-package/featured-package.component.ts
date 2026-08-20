import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronLeft,
  LucideShoppingBag,
  LucideStar,
  LucideTag,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';

export interface PackageItem {
  id: number | string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  discount: number;
  products: number;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-featured-package',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './featured-package.component.html',
  styleUrl: './featured-package.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedPackageComponent {
  @Input({ required: true }) packageItem!: PackageItem;

  private readonly cartService = inject(CartService);

  readonly starIcon = LucideStar;
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
