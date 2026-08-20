import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideShoppingBag } from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';

export interface OfferBundle {
  id: number | string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  saving: number;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-offers-bundle-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './offers-bundle-card.component.html',
  styleUrl: './offers-bundle-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersBundleCardComponent {
  @Input({ required: true }) bundle!: OfferBundle;

  private readonly cartService = inject(CartService);

  readonly shoppingBagIcon = LucideShoppingBag;

  onAddToCart(): void {
    this.cartService.addToCart({
      ...this.bundle,
      id: `bundle-${this.bundle.id}`,
      quantity: 1,
    });
  }
}
