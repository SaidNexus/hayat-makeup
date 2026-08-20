import { Component, EventEmitter, Input, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucideShoppingBag,
  LucideStar,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { FavoritesService } from '../../../../core/services/favorites.service';

export interface BestSellerProduct {
  id: number | string;
  rank: number;
  name: string;
  variant: string;
  price: number;
  rating: number;
  reviews: string | number;
  image: string;
}

@Component({
  selector: 'app-best-seller-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './best-seller-card.component.html',
  styleUrl: './best-seller-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellerCardComponent {
  @Input({ required: true }) product!: BestSellerProduct;
  @Output() selectProduct = new EventEmitter<void>();

  private readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoritesService);

  readonly heartIcon = LucideHeart;
  readonly shoppingBagIcon = LucideShoppingBag;
  readonly starIcon = LucideStar;

  get isLastTwo(): boolean {
    return this.product.rank >= 4;
  }

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
