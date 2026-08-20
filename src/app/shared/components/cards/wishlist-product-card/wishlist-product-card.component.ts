import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucideShoppingCart,
} from '@lucide/angular';

export interface WishlistProduct {
  id: number | string;
  name: string;
  variant?: string;
  price: number | string;
  image: string;
}

@Component({
  selector: 'app-wishlist-product-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './wishlist-product-card.component.html',
  styleUrl: './wishlist-product-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistProductCardComponent {
  @Input({ required: true }) product!: WishlistProduct;
  @Output() addToCart = new EventEmitter<WishlistProduct>();
  @Output() removeProduct = new EventEmitter<number | string>();

  readonly heartIcon = LucideHeart;
  readonly shoppingCartIcon = LucideShoppingCart;

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onRemove(): void {
    this.removeProduct.emit(this.product.id);
  }
}
