import { Component, EventEmitter, Input, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucideShoppingCart,
  LucideStar,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { FavoritesService } from '../../../../core/services/favorites.service';

export interface RelatedProduct {
  id: number | string;
  name: string;
  price: number | string;
  rating: number | string;
  image: string;
}

@Component({
  selector: 'app-related-product-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './related-product-card.component.html',
  styleUrl: './related-product-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedProductCardComponent {
  @Input({ required: true }) product!: RelatedProduct;
  @Output() selectProduct = new EventEmitter<void>();

  private readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoritesService);

  readonly heartIcon = LucideHeart;
  readonly shoppingCartIcon = LucideShoppingCart;
  readonly starIcon = LucideStar;

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.product.id);
  }

  handleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(this.product);
  }

  handleAddToCart(): void {
    this.cartService.addToCart({ ...this.product, quantity: 1 });
  }

  handleSelect(): void {
    this.selectProduct.emit();
  }
}
