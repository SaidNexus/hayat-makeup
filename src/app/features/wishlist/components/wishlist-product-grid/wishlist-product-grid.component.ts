import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  WishlistProductCardComponent,
  WishlistProduct,
} from '../../../../shared/components/cards/wishlist-product-card/wishlist-product-card.component';

@Component({
  selector: 'app-wishlist-product-grid',
  standalone: true,
  imports: [WishlistProductCardComponent],
  templateUrl: './wishlist-product-grid.component.html',
  styleUrl: './wishlist-product-grid.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistProductGridComponent {
  @Input({ required: true }) products: WishlistProduct[] = [];
  @Output() addToCart = new EventEmitter<WishlistProduct>();
  @Output() removeProduct = new EventEmitter<number | string>();

  onAddToCart(product: WishlistProduct): void {
    this.addToCart.emit(product);
  }

  onRemove(id: number | string): void {
    this.removeProduct.emit(id);
  }
}
